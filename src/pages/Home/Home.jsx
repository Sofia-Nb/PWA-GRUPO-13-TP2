import React from "react";
import { Routes } from "../../const/routes";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigation = useNavigate();

  return (
    <>
      <h1>Home</h1>
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
    </>
  );
};

export default Home;