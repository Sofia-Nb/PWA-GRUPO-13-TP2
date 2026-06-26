import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Titulo from "../../components/Titulo/Titulo";
import { GetTanqueById, deleteTanque, updateTanque } from "../../const/tanques";
import { generarPDF } from "../../utils/generarPdf/generarPdf";
import Header from "../../components/Header/Header";
import Boton from '../../components/Boton/Boton';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Modal from "../../components/Modal/Modal";

const Details = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const user = JSON.parse(localStorage.getItem("user"));
  const esAdmin = user?.rol === "admin";
  const [tanque, setTanque] = useState(null);
  const [error, setError] = useState(false);
  const [favoritos, setFavoritos] = useState(
  JSON.parse(localStorage.getItem("favoritos")) || []);
  const existeItem = favoritos.some(fav => String(fav.id) === String(id));
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [formData, setFormData] = useState({nombre: "", tipo: "", descripcion: "", imagen: ""});

  useEffect(() => {
  const cargarTanque = async () => {
    try {
      const data = await GetTanqueById(id);
      if (!data?.data?.nombre) {
        setError(true);
      } else {
        setTanque(data.data);
      }
    } catch (error) {
      setError(true);
      console.error("Error al cargar el tanque:", error);
    }
  };
  cargarTanque();
}, [id]);

useEffect(() => {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}, [favoritos]);

const agregarFavoritos = () => {
    if (existeItem) {
      eliminarFavoritos();
      return;
    }
    setFavoritos(prev => [
  ...prev,
  {
    id,
    nombre: tanque?.nombre,
    tipo: tanque?.tipo,
    descripcion: tanque?.descripcion,
    imagen: tanque?.imagen
  }
]);
};

const eliminarFavoritos = () => {
  setFavoritos(prev =>
    prev.filter(fav => String(fav.id) !== String(id))
  );
};

const eliminarTanque = async () => {
  try {
    const confirmar = await Swal.fire({
      title: "¿Eliminar tanque?",
      text: `¿Estás seguro de que quieres eliminar "${tanque?.nombre}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!confirmar.isConfirmed) return;
    const respuesta = await deleteTanque(id);
    if (respuesta) {
      await Swal.fire({
    title: "Eliminado",
    text: "El tanque fue eliminado correctamente.",
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
  });
  navigate("/");
}
  } catch (error) {
     await Swal.fire({
    title: "Error",
    text: "No se pudo eliminar el tanque.",
    icon: "error",
    confirmButtonText: "Aceptar",
  });
  }
};

const editarTanque = async () => {
    if (!formData.nombre.trim()) {
    Swal.fire("Error", "El nombre es obligatorio", "error");
    return;
}
    if (!formData.tipo.trim()) {
    Swal.fire("Error", "El tipo es obligatorio", "error");
    return;
}
    if (!formData.descripcion.trim()) {
    Swal.fire("Error", "La descripción es obligatoria", "error");
    return;
}
    if (!formData.imagen.trim()) {
    Swal.fire("Error", "La imagen es obligatoria", "error");
    return;
}
  try {
    await updateTanque(id, formData);
    setTanque(formData);

    await Swal.fire({
      title: "Actualizado",
      text: "El tanque fue actualizado correctamente.",
      icon: "success",
    });

    setMostrarModal(false);
  } catch (error) {
    await Swal.fire({
      title: "Error",
      text: "No se pudo actualizar el tanque.",
      icon: "error",
    });
  }
};

const abrirModal = () => {
  setFormData(tanque); 
  setMostrarModal(true);
};

  return (
  <div className="min-h-screen flex flex-col">
  <Header />
  <main className="flex-1">
  {error ? (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <p className="text-2xl font-bold text-gray-700">Tanque no encontrado</p>
        <p className="text-gray-400">El tanque con id "{id}" no existe</p>
      </div>
    ) : (
      <>
        <Titulo texto={t("details.title")} />
            <div className="p-6 max-w-2xl mx-auto">
          <img src={tanque?.imagen} alt={tanque?.nombre} className="w-full h-64 object-cover rounded-xl mb-4"/>
          <h2 className="text-2xl font-bold mb-2">{tanque?.nombre}</h2>
          <p className="text-blue-500 text-sm font-semibold uppercase mb-2">{tanque?.tipo}</p>
          <p className="text-gray-600">{tanque?.descripcion}</p>
          <br/>
          <Boton
            children="❤"
            onClick={() => {
              agregarFavoritos();
            }}
            variante="favorito"
            style={{ color: existeItem ? "#e11d48" : "#94a3b8" }}
          /> 
          <Boton 
            children={t("details.boton")}
            onClick={() => generarPDF(tanque?.nombre, tanque?.tipo, tanque?.descripcion, tanque?.imagen)} 
            variante="primario"
          />

         {esAdmin && (
            <>
          <Boton
          children="Editar"
          onClick={abrirModal}
          variante="editar"/>
          <Modal
          mostrarModal={mostrarModal}
          setMostrarModal={setMostrarModal}
          formData={formData}
          setFormData={setFormData}
          onSubmit={editarTanque}
          modo="editar"/>
          <Boton 
            children={"Eliminar"}
            onClick={() => {eliminarTanque()}} 
            variante="peligro"
          />
          </>
          )}

        </div>
      </>
    )}
    </main>
    <Footer />
    </div>
  );
};

export default Details;