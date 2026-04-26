const url = 'https://69e8b67055d62f347979b5af.mockapi.io/api/v1';

export const GetTanques = async (page = 1, limit = 3) => {
  const res = await fetch(`${url}/tanques?page=${page}&limit=${limit}`);
  return res.json();
};

export const GetTanqueById = async (id) => {
  const res = await fetch(`${url}/tanques/${id}`);
  return res.json();
};