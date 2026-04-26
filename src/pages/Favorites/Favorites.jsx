import React from 'react';
import { Routes } from "../../const/routes";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import Titulo from "../../components/Titulo/Titulo";
import { LenguajeSelect } from "../../components/LenguajeSelect/LenguajeSelect";

const Favorites = () => {
    const navigation = useNavigate();
    const { t } = useTranslation();
  return (
    <>
    <LenguajeSelect></LenguajeSelect>
      <Titulo texto={t("favorites.title")} />
      <button className= "font-bold py-2 px-4 rounded"
        onClick={() => {
          navigation(Routes.details);
        }}> {t("favorites.detalles")}
      </button>

    <button className= "font-bold py-2 px-4 rounded"
        onClick={() => {
          navigation(Routes.home);
        }}> {t("favorites.home")}
    </button>
    </>
  );
};

export default Favorites;