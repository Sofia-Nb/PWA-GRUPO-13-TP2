const TankItemCard = ({ nombre, tipo, descripcion, imagen }) => {
    return (
        <div className="rounded-lg shadow-md overflow-hidden bg-white">
            <img src={imagen} alt={nombre} className="w-full h-48 object-cover"/>
            <div className="p-4">
                <span className=" font-semibold text-gray-400">{tipo}</span>
                <h5 className="text-lg font-bold mb-1">{nombre}</h5>
                <p className="text-gray-600 text-sm mb-2">{descripcion}</p>
            </div>
        </div>
    );
}

export default TankItemCard;