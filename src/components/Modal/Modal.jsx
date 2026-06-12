import React from "react";

const Modal = ({ mostrarModal, setMostrarModal, formData, setFormData, onSubmit, modo, loading }) => {
  if (!mostrarModal) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setMostrarModal(false)}
      />
      <div className="relative w-full max-w-md rounded-xl border border-gray-700 bg-gray-800 shadow-2xl">
        <div className="p-5">
          <h2 className="mb-5 text-xl font-semibold text-white">{modo === "editar" ? "Editar tanque" : "Crear tanque"}</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-gray-300">
                Nombre
              </label>
              <input
                type="text"
                disabled={loading}
                value={formData.nombre || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    nombre: e.target.value,
                  })
                }
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-gray-300">
                Tipo
              </label>

              <input
                type="text"
                disabled={loading}
                value={formData.tipo || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    tipo: e.target.value,
                  })
                }
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-gray-300">
                Descripción
              </label>
              <textarea
                rows="3"
                value={formData.descripcion || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    descripcion: e.target.value,
                  })
                }
                className="w-full resize-none rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-gray-300">
                Imagen URL
              </label>
              <input
              type="text"
              disabled={loading}
              value={formData.imagen || ""}
              onChange={(e) =>
                 setFormData({
                  ...formData,
                  imagen: e.target.value,})}
                  className="w-full resize-none rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 border-t border-gray-700 px-5 py-4">
          <button
            onClick={() => setMostrarModal(false)}
            disabled={loading}
            className="cursor-pointer rounded-md bg-gray-600 px-4 py-2 text-white transition hover:bg-gray-500">
            Cancelar
          </button>

          <button onClick={onSubmit} disabled={loading} className="cursor-pointer rounded-md bg-green-600 px-4 py-2 text-white transition hover:bg-green-500">
            {loading ? (modo === "editar" ? "Guardando..." : "Creando...") : (modo === "editar" ? "Guardar cambios" : "Crear tanque")}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;