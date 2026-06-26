const url = 'https://pwa-grupo-13-tp-express.vercel.app';

export const GetTanques = async (page = 1, limit = 3) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${url}/tanques?page=${page}&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("Error al obtener tanques");
  }
  return res.json();
};

export const GetTanqueById = async (id) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${url}/tanques/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("Error al obtener el tanque");
  }
  return res.json();
};

export const CreateTanque = async (tanque) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${url}/tanques`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, },
    body: JSON.stringify(tanque)
    });
  return res.json();
};

export const updateTanque = async (id, tanque) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${url}/tanques/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, },
    body: JSON.stringify(tanque)
    });
  return res.json();
}

export const deleteTanque = async (id) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${url}/tanques/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, },
    });
    if (!res.ok) throw new Error("Error al eliminar");
    return true;
}