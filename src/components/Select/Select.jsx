const Select = ({ opciones, onChange, value }) => {
  return (
    <div className="relative w-35 max-w-xs">
    <select
      className="w-full text-sm px-3 py-2 pr-8 border border-gray-600 rounded-lg bg-slate-800 text-white 
        focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
      onChange={onChange}
      value={value}
    >
      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>

    <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
        ▼
      </span>
    </div>
  );
};

export default Select;
