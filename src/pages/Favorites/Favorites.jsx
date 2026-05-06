import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import Header from "../../components/Header/Header";
import TankItemCard from '../../components/TankItemCard/TankItemCard';
import Footer from '../../components/Footer/Footer';
import Busqueda from '../../components/Busqueda/Busqueda';
import Filtro from '../../components/Filtro/Filtro';

const Favorites = () => {
    const { t } = useTranslation();
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const [busqueda, setBusqueda] = useState("");
    const [categoria, setCategoria] = useState("todos");

    const categorias = [
      { value: "todos", label: "Todos" },
      ...([...new Set(favoritos.map(f => f.tipo))].map(tipo => ({ value: tipo, label: tipo })))
    ];

    const favoritosFiltrados = favoritos.filter((favorito) => {
      const coincideNombre = favorito.nombre.toLowerCase().includes(busqueda.toLowerCase());
      const coincideCategoria = categoria === "todos" || favorito.tipo === categoria;
      return coincideNombre && coincideCategoria;
    });

  return (
    <>
      <Header />

      <div className="flex justify-between items-center gap-4 px-6 py-4">
        <Filtro
          opciones={categorias}
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        <div className="w-1/2">
          <Busqueda
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder={t("placeholder.search")}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 p-6">
        {favoritosFiltrados.length > 0 ? (
          favoritosFiltrados.map((favorito) => (
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
          <p className="text-center p-4 text-gray-400">
            {t("favorites.no_results") || "No se encontraron favoritos"}
          </p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Favorites;