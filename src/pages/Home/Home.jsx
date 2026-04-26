import React, { useTransition } from "react";
import { Routes } from "../../const/routes";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import Select from "../../components/Select/Select";
import Titulo from "../../components/Titulo/Titulo";
import { LenguajeSelect } from "../../components/LenguajeSelect/LenguajeSelect";

export const Home = () => {
  const navigation = useNavigate();
  const { t } = useTranslation();
  return (
    <>
    <LenguajeSelect></LenguajeSelect>
      <Titulo texto= {t("home.title")} />
      <button className="font-bold py-2 px-4 rounded"
        onClick={() => {
          navigation(Routes.favorites);
        }}> {t("home.favoritos")}
      </button>
      <button className="font-bold py-2 px-4 rounded"
        onClick={() => {
          navigation(Routes.details);
        }}> {t("home.detalles")}
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