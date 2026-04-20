const Select = ({ opciones, onChange }) => {
    return (
        <select className= "w-48 sm:w-56 px-3 py-2 border border-gray-300 rounded-md text-center" onChange={onChange}>
            {opciones.map((opcion, index) => (
                <option key={index} value={opcion.value}>
                    {opcion.label}
                </option>
            ))}
        </select>
    );
}

export default Select;