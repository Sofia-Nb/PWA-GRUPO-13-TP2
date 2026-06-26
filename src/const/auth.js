const url = 'https://pwa-grupo-13-tp-express.vercel.app';

export const loginUser = async (email, password) => {
    const res = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const data = await res.json();
    
    if (!res.ok) {
        throw new Error(data.message);
    }

    return data;
};


export const registerUser = async (nombre, email, password) => {
    const res = await fetch(`${url}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre,
            email,
            password,
        }),
    });
    
    const data = await res.json();
    
    if (!res.ok) {
        throw new Error(data.message);
    }
    
    return data;
};

export const logoutUser = async () => {
    const res = await fetch(`${url}/auth/logout`, {
        method: "POST",
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message);
    }

    return data;
};









