import React from 'react';
import { Routes } from "../../const/routes";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import Titulo from "../../components/Titulo/Titulo";
import { LenguajeSelect } from "../../components/LenguajeSelect/LenguajeSelect";
import Header from "../../components/Header/Header";

const Favorites = () => {
    const navigation = useNavigate();
    const { t } = useTranslation();
  return (
    <>
  <Header></Header>

      <Titulo texto={t("favorites.title")} />
      
    </>
  );
};

export default Favorites;