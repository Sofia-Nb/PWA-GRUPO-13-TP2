import React from 'react';
import { Routes } from "../../const/routes";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Titulo from "../../components/Titulo/Titulo";
import { LenguajeSelect } from "../../components/LenguajeSelect/LenguajeSelect";

const Details = () => {
  const navigation = useNavigate();
  const { t } = useTranslation();
  return (
    <>
    <LenguajeSelect></LenguajeSelect>
      <Titulo texto={t("details.title")} />
      <button className="font-bold py-2 px-4 rounded"
        onClick={() => {
          navigation(Routes.favorites);
        }}> {t("details.favoritos")}
      </button>
      <button className="font-bold py-2 px-4 rounded"
        onClick={() => {
          navigation(Routes.home);
        }}> {t("details.home")}
      </button>
    </>
  );
};

export default Details;