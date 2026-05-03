import React from 'react';
import { Link } from "react-router-dom";
import { Routes } from "../../const/routes";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import Titulo from "../../components/Titulo/Titulo";
import { LenguajeSelect } from "../../components/LenguajeSelect/LenguajeSelect";
import Header from "../../components/Header/Header";
import TankItemCard from '../../components/TankItemCard/TankItemCard';
import Footer from '../../components/Footer/Footer';

const Favorites = () => {
    const navigation = useNavigate();
    const { t } = useTranslation();
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  return (
    <>
  <Header></Header>

      <Titulo texto={t("favorites.title")} />

      <div className="grid lg:grid-cols-3 gap-6 p-6">
        {favoritos.length > 0 ? (
        favoritos.map((favorito, index) => (
          <Link key={favorito.id} to={`/details/${favorito.id}`}>
          <TankItemCard 
          nombre={favorito.nombre}
          tipo={favorito.tipo}
          descripcion={favorito.descripcion}
          imagen={favorito.imagen}
          />
          </Link>
        )) 
      ) : (
          <p className="text-center p-4 text-gray-400">{t("favorites.no_results") || "No se encontraron favoritos"}</p>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Favorites;