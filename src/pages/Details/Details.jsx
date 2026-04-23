import React, { useState, useEffect } from 'react';
import { Routes } from "../../const/routes";
import { useNavigate, useParams } from "react-router-dom";
import Titulo from "../../components/Titulo/Titulo";
import TankItemCard from "../../components/TankItemCard/TankItemCard";
import { GetTanqueById } from "../../const/tanques"

const Details = () => {
    const navigation = useNavigate();
    const { id } = useParams();
    const [tanque, setTanque] = useState(null);

    useEffect(() => {
        const cargarTanque = async () => {
            try {
                const data = await GetTanqueById(id);
                setTanque(data);
            } catch (error) {
                console.error("Error al cargar el tanque:", error);
            }
        };
        cargarTanque();
    }, [id]);

      return (
        <>
          <Titulo texto="Bienvenido a Detalles" />
          <button className= "font-bold py-2 px-4 rounded"
            onClick={() => {
              navigation(Routes.favorites);
            }}> FAVORITOS
          </button>
          <button className= "font-bold py-2 px-4 rounded"
            onClick={() => {
              navigation(Routes.home);
            }}> HOME
          </button>
            
          <div className="p-6 max-w-2xl mx-auto">
            <img src={tanque?.imagen} alt={tanque?.nombre} className="w-full h-64 object-cover rounded-xl mb-4"/>
            <h2 className="text-2xl font-bold mb-2">{tanque?.nombre}</h2>
            <p className="text-blue-500 text-sm font-semibold uppercase mb-2">{tanque?.tipo}</p>
            <p className="text-gray-600">{tanque?.descripcion}</p>
        </div>
        </>
      );
};

export default Details;