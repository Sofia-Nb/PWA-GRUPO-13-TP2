import React from "react";
import { useTranslation } from "react-i18next";
import Select from "../Select/Select";

export const LenguajeSelect = () => {
  const { i18n, t } = useTranslation();
  

  const changeLenguaje = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const opciones = [
    { value: "es", label: t("spanish") },
    { value: "en", label: t("english") }
  ];

  return (
    <div>
      <Select opciones={opciones} onChange={changeLenguaje} 
      value= {i18n.resolvedLanguage}/>
    </div>
  );
};
