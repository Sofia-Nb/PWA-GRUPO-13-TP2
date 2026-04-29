const Busqueda = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder || "Buscar"}
      value={value}
      onChange={onChange}
      className="border rounded px-4 py-2 w-full mb-4"
    />
  );
};

export default Busqueda;