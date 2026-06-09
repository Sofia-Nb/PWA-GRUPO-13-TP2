const url = 'https://pwa-grupo-13-tp-2.vercel.app';

export const GetTanques = async (page = 1, limit = 3) => {
  const res = await fetch(`${url}/tanques?page=${page}&limit=${limit}`);
  if (!res.ok) {
    throw new Error("Error al obtener tanques");
  }
  return res.json();
};

export const GetTanqueById = async (id) => {
  const res = await fetch(`${url}/tanques/${id}`);
  if (!res.ok) {
    throw new Error("Error al obtener el tanque");
  }
  return res.json();
};

export const CreateTanque = async (tanque) => {
  const res = await fetch(`${url}/tanques`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tanque)
    });
  return res.json();
};

export const updateTanque = async (id, tanque) => {
  const res = await fetch(`${url}/tanques/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tanque)
    });
  return res.json();
}

export const deleteTanque = async (id) => {
  const res = await fetch(`${url}/tanques/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error("Error al eliminar");
    return true;
}