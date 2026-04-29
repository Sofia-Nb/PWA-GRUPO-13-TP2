import React from "react";
import mascotas from "../../assets/mascotas.jpg";


const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-3 items-center">

        
        <span className="text-sm text-left">
          © {new Date().getFullYear()} Type Tanks
        </span>

        
        <div className="text-center text-sm flex flex-col gap-1">
          <a
            href="https://github.com/Sofia-Nb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            PM: Sofia Bascur
          </a>

          <a
            href="https://github.com/woroz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Dev: Nahuel Gonzales
          </a>

          <a
            href="https://github.com/nasusxd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Dev: Juan Sastre
          </a>
           <a
          href="https://github.com/Sofia-Nb/PWA-GRUPO-13-TP2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-white"
        >
          GitHub
        </a>
        </div>
        

       
        <div className="flex justify-end">
          <img
            src={mascotas}
            alt="mascotas"
            className="h-24 w-auto rounded-lg shadow-md"
          />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
