import React from 'react';
import { Routes } from "../../const/routes";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
    const navigation = useNavigate();
  return (
    <>
      <h1>Favoritos</h1>
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