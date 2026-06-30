const url = "https://pwa-grupo-13-tp-express.vercel.app";


const getHeaders = () => {
    const token = localStorage.getItem("token");
    return {
        Authorization: `Bearer ${token}`
    };
};

export const getFavorites = async () => {
    const res = await fetch(`${url}/favorites`, {
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message);
    }
    return data.data;
};

export const addFavorite = async (tanqueId) => {
    const res = await fetch(`${url}/favorites/${tanqueId}`, {
        method: "POST",
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message);
    }
    return data.data;
};

export const removeFavorite = async (tanqueId) => {
    const res = await fetch(`${url}/favorites/${tanqueId}`, {
        method: "DELETE",
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message);
    }
    return data;
};