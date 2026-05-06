import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Routes } from "../../const/routes";

import Boton from "../Boton/Boton";
import { LenguajeSelect } from "../LenguajeSelect/LenguajeSelect";

const Header = () => {
    const navigation = useNavigate();
    const { t } = useTranslation();
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">


                <h1 className="text-lg font-bold">
                    <Link to={Routes.home} className="hover:text-gray-300 transition">
                        {t("header.title")}
                    </Link>
                </h1>
                <button
                className="md:hidden text-2xl"
                onClick={() => setMenuAbierto(!menuAbierto)}
                > ☰ </button>

                <div className={`absolute md:static top-full left-0 w-full md:w-auto bg-slate-900 md:flex items-center gap-3 
                    ${menuAbierto ? "flex flex-col p-4" : "hidden"}`}>

                    <Boton variante="header"
                        onClick={() => navigation(Routes.home)}  >
                            {t("header.home")}
                            
                        </Boton>
                    <Boton
                        variante="header"
                        onClick={() => navigation(Routes.favorites)}
                    >
                        {t("header.favoritos")}
                    </Boton>

                    <LenguajeSelect />

                </div>
            </div>
        </header>
    );
};

export default Header;
