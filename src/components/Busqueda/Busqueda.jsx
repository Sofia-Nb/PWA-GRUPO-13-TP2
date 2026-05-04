const Busqueda = ({ value, onChange, placeholder }) => {
  return (
      <input
        type="text"
        placeholder={placeholder || "Buscar tanque..."}
        value={value}
        onChange={onChange}
        className="
          w-full
          px-5 py-3
          rounded-lg
          border border-gray-300
          bg-gray-50
          text-sm
          outline-none
          transition
          focus:bg-white
          focus:border-blue-500
          focus:ring-2 focus:ring-blue-200
          placeholder-gray-400
        "
      />
  );
};

export default Busqueda;
