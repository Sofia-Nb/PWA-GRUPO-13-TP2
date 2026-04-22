import React from "react";
import { Routes } from "../../const/routes";
import { useNavigate } from "react-router-dom";
import  Select  from "../../components/Select/Select";
import Titulo from "../../components/Titulo/Titulo";

export const Home = () => {
  const navigation = useNavigate();

  return (
    <>
      <Titulo texto="Bienvenido al Home" />
      <button className= "font-bold py-2 px-4 rounded"
        onClick={() => {
          navigation(Routes.favorites);
        }}> FAVORITOS
      </button>
      <button className="font-bold py-2 px-4 rounded"
        onClick={() => {
          navigation(Routes.details);
        }}> DETALLES
      </button>

      <Select
      opciones={[
        { label: "Opción 1", value: "opcion1" },
        { label: "Opción 2", value: "opcion2" },
        { label: "Opción 3", value: "opcion3" },
      ]}
      onChange={(e) => {
        console.log("Seleccionaste:", e.target.value);
      }}
    />
    
    </>
  );
};

export default Home;