import React, { useState, useEffect } from 'react';
import { Routes } from "../../const/routes";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next"; // De main
import Titulo from "../../components/Titulo/Titulo";
import { LenguajeSelect } from "../../components/LenguajeSelect/LenguajeSelect"; // De main
import { GetTanqueById } from "../../const/tanques";
import { generarPDF } from "../../utils/generarPdf/generarPdf";
import Header from "../../components/Header/Header";
import Boton from '../../components/Boton/Boton';
import Footer from '../../components/Footer/Footer';

const Details = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation(); // De main
  const [tanque, setTanque] = useState(null);
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const [botonActivo, setBotonActivo] = useState(false);
  const [nuevosFavoritos, setNuevosFavoritos] = useState(favoritos);
  const existeItem = favoritos.some(fav => fav.id === id);

  useEffect(() => {
    const cargarTanque = async () => {
      try {
        const data = await GetTanqueById(id);
        setTanque(data);
      } catch (error) {
        console.error("Error al cargar el tanque:", error);
      }
    };
    cargarTanque();
  }, [id]);

  const agregarFavoritos = () =>{
    if(existeItem){
      eliminarFavoritos();
      return;
    }
    favoritos.push({
    id: id,
    nombre: tanque?.nombre,
    tipo: tanque?.tipo,
    descripcion: tanque?.descripcion,
    imagen: tanque?.imagen
  });
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    return;
  }

  const eliminarFavoritos = () => {
    const nuevosFavoritos = favoritos.filter(fav => fav.id !== id);
    setNuevosFavoritos(nuevosFavoritos)
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  };

  return (
    <>
    <Header></Header>
      <Titulo texto={t("details.title")} />
      
      <div className="p-6 max-w-2xl mx-auto">
        <img src={tanque?.imagen} alt={tanque?.nombre} className="w-full h-64 object-cover rounded-xl mb-4"/>
        <h2 className="text-2xl font-bold mb-2">{tanque?.nombre}</h2>
        <p className="text-blue-500 text-sm font-semibold uppercase mb-2">{tanque?.tipo}</p>
        <p className="text-gray-600">{tanque?.descripcion}</p>
        <br/>
        <Boton
          children ="❤"
          onClick={() => {
            agregarFavoritos();
            setBotonActivo(!botonActivo);
          }}
          variante= "favorito"
          style={{ color: existeItem ? "#e11d48" : "#94a3b8" }}
          /> 
          
        <Boton 
        children ={t("details.boton")}
        onClick={() =>
          generarPDF(
            tanque?.nombre,
            tanque?.tipo,
            tanque?.descripcion,
            tanque?.imagen
          )} 
          variante= "primario"
          />
      </div>
      <Footer></Footer>
    </>
  );
};


export default Details;