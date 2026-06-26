import styles from "./boton.module.css";
import React from "react";

const Boton = ({ children, onClick, variante, style, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={[
        styles.boton,
        variante === "peligro" && styles.peligro,
        variante === "primario" && styles.primario,
        variante === "header" && styles.header,
        variante === "favorito" && styles.favorito,
        variante === "editar" && styles.editar,
        variante === "crear" && styles.crear,
        variante === "logOut" && styles.logOut,
      ].filter(Boolean).join(" ")}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Boton;
