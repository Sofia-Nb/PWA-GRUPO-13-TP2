import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Routes } from "../../const/routes";
import { CreateTanque } from "../../const/tanques";
import Boton from "../Boton/Boton";
import { LenguajeSelect } from "../LenguajeSelect/LenguajeSelect";
import Modal from "../Modal/Modal";
import Swal from "sweetalert2";

const Header = () => {
    const navigation = useNavigate();
    const { t } = useTranslation();
    const user = JSON.parse(localStorage.getItem("user"));
    const esAdmin = user?.rol === "admin";
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [formData, setFormData] = useState({nombre: "", tipo: "", descripcion: "", imagen: ""});
    const [loading, setLoading] = useState(false);

    const abrirModal = () => {
        setFormData({
        nombre: "",
        tipo: "",
        descripcion: "",
        imagen: ""
    });
    setMostrarModal(true);
    };

    const crearTanque = async () => {
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
    setLoading(true);
    await CreateTanque(formData);
    await Swal.fire({
      title: "Éxito",
      text: "Tanque creado correctamente",
      icon: "success",
    });
    setMostrarModal(false);
    setFormData({
      nombre: "",
      tipo: "",
      descripcion: "",
    });
  } catch (error) {
    Swal.fire({
      title: "Error",
      text: error?.response?.data?.error?.join("\n") ||
      error?.message ||
      "No se pudo crear el tanque",
      icon: "error",
    });
  }finally {
    setLoading(false);
  }
};
    return (
        <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
                <h1 className="text-lg font-bold">
                    <Link to={Routes.home} className="hover:text-gray-300 transition">
                        {t("header.title")}
                    </Link>
                </h1>
                <button
                className="md:hidden text-2xl"
                onClick={() => setMenuAbierto(!menuAbierto)}
                > ☰ </button>

                <div className={`absolute md:static top-full left-0 w-full md:w-auto bg-slate-900 md:flex items-center gap-3 
                    ${menuAbierto ? "flex flex-col p-4" : "hidden"}`}>

                    {esAdmin && (
                    <>
                    <Boton
                    children="CREAR"
                    onClick={abrirModal}
                    variante="crear"/>
                    </>
                    )}

                    <Modal
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={crearTanque}
                    modo="crear"
                    loading={loading}/>

                    <Boton variante="header"
                        onClick={() => navigation(Routes.home)}  >
                            {t("header.home")}
                            
                        </Boton>
                    <Boton
                        variante="header"
                        onClick={() => navigation(Routes.favorites)}
                    >
                        {t("header.favoritos")}
                    </Boton>

                    <Boton
                        variante="header"
                        onClick={() => navigation(Routes.login)}
                    >
                        {t("header.login")}
                    </Boton>

                    <LenguajeSelect />

                </div>
            </div>
        </header>
    );
};

export default Header;
