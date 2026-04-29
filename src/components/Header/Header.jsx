import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Routes } from "../../const/routes";

import Boton from "../Boton/Boton";
import { LenguajeSelect } from "../LenguajeSelect/LenguajeSelect";

const Header = () => {
    const navigation = useNavigate();
    const { t } = useTranslation();

    return (
        <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">

            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">


                <h1 className="text-lg font-bold tracking-wide">
                    <Link to={Routes.home} className="hover:text-gray-300 transition">
                        {t("header.title")}
                    </Link>
                </h1>


                <div className="flex items-center gap-3">

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

                    <Boton
                        variante="header"
                        onClick={() => navigation(Routes.details)}
                    >
                        {t("header.detalles")}
                    </Boton>

                    <LenguajeSelect />

                </div>
            </div>
        </header>
    );
};

export default Header;
