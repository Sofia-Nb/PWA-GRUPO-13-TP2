import React from 'react';
import { Routes } from "../../const/routes";
import { useNavigate } from "react-router-dom";
import Titulo from "../../components/Titulo/Titulo";

const Favorites = () => {
    const navigation = useNavigate();
  return (
    <>
      <Titulo texto="Bienvenido a Favoritos" />
      <button className= "font-bold py-2 px-4 rounded"
        onClick={() => {
          navigation(Routes.details);
        }}> DETALLES
      </button>

    <button className= "font-bold py-2 px-4 rounded"
        onClick={() => {
          navigation(Routes.home);
        }}> HOME
    </button>
    </>
  );
};

export default Favorites;