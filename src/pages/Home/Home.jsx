import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../const/routes";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import Select from "../../components/Select/Select";
import Titulo from "../../components/Titulo/Titulo";
import { LenguajeSelect } from "../../components/LenguajeSelect/LenguajeSelect";
import TankItemCard from "../../components/TankItemCard/TankItemCard";
import { GetTanques } from "../../const/tanques";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export const Home = () => {
  const navigation = useNavigate();
  const { t } = useTranslation();
  const [tanques, setTanques] = useState([]);
  const [page, setPage] = useState(1); 
  const [loading, setLoading] = useState(false); 
  const [more, setMore] = useState(true);
  const divRef = useRef(null);

  useEffect(() => {
    const cargarTanques = async () => {
      setLoading(true);
      try {
        const data = await GetTanques(page, 3);
        if (data.length === 0) {
          setMore(false); 
        } else {
          setTanques(prev => [...prev, ...data]); 
        }
      } catch (error) {
        console.error("Error al cargar tanques:", error);
      } finally {
        setLoading(false); 
      }
    };
    cargarTanques();
  }, [page]); 

  useEffect(() => {
    if (!more) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        setPage(prev => prev + 1);
      }
    });
    if (divRef.current) observer.observe(divRef.current);
    return () => observer.disconnect();
  }, [loading, more]); 

  return (
    <>
      <Header></Header>
      
      <div className="grid lg:grid-cols-3 gap-6 p-6">
        {tanques.map(tanque => (
          <Link key={tanque.idTanque} to={`/details/${tanque.idTanque}`}>
            <TankItemCard
              nombre={tanque.nombre}
              tipo={tanque.tipo}
              descripcion={tanque.descripcion}
              imagen={tanque.imagen}
            />
          </Link>
        ))}
      </div>

      {loading && <p className="text-center p-4">{t("common.loading") || "Cargando..."}</p>}
      {!more && <p className="text-center p-4 text-gray-400">{t("home.no_more") || "No hay más tanques"}</p>}
      
      <div ref={divRef} className="h-4"/>
      <Footer></Footer>
    </>

  );
};

export default Home;