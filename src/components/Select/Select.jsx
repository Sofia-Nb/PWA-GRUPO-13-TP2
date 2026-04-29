const Select = ({ opciones, onChange, value }) => {
  return (
    <select
      className="text-sm px-2 py-1 border border-gray-600 rounded bg-slate-800 text-white focus:outline-none"
      onChange={onChange}
      value={value}
    >
      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
