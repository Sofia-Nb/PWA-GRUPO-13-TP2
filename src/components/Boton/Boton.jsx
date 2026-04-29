import styles from "./boton.module.css";
import React from "react";

const Boton = ({ children, onClick, variante }) => {
  return (
    <button
      onClick={onClick}
      className={[
        styles.boton,
        variante === "peligro" && styles.peligro,
        variante === "primario" && styles.primario,
        variante === "header" && styles.header
      ].filter(Boolean).join(" ")}
    >
      {children}
    </button>
  );
};

export default Boton;
