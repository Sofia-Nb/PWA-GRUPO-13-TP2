const url = 'http://localhost:3000';

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