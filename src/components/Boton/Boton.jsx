import styles from "./boton.module.css";
import React from "react";

const Boton = ({ children, onClick, variante, style }) => {
  return (
    <button
      onClick={onClick}
      className={[
        styles.boton,
        variante === "peligro" && styles.peligro,
        variante === "primario" && styles.primario,
        variante === "header" && styles.header,
        variante === "favorito" && styles.favorito,
      ].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </button>
  );
};

export default Boton;
