import React from 'react';
import { Routes } from "../../const/routes";
import { useNavigate } from "react-router-dom";
import Titulo from "../../components/Titulo/Titulo";

const Details = () => {
    const navigation = useNavigate();
      return (
        <>
          <Titulo texto="Bienvenido a Detalles" />
          <button className= "font-bold py-2 px-4 rounded"
            onClick={() => {
              navigation(Routes.favorites);
            }}> FAVORITOS
          </button>
          <button className= "font-bold py-2 px-4 rounded"
            onClick={() => {
              navigation(Routes.home);
            }}> HOME
          </button>
        </>
      );
};

export default Details;