import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../const/auth';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
    const data = await loginUser(email, password);
    console.log(email, password);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    navigate("/");

  } catch (error) {
    setError(error.message);
  }
  };
  
  const navigate = useNavigate();
  return (
    <div>
        <Header />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">

        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-900 p-4 rounded-full text-white text-3xl">
          </div>

          <h1 className="text-3xl font-bold mt-4 text-gray-800">
            Iniciar Sesión
          </h1>

          <p className="text-gray-500 mt-2 text-center">
            Bienvenido nuevamente a <span className="font-semibold">Type Tanks</span>
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Correo electrónico
            </label>

            <input
              type="email"
              placeholder="ejemplo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Contraseña
            </label>

            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            {error && (
              <p className="text-red-500 text-center">{error}</p>
              )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 transition text-white font-semibold py-3 rounded-lg"
          >
            Iniciar Sesión
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
        ¿No tienes una cuenta?{" "}
        <button
        type="button"
        onClick={() => navigate("/register")}
        className="text-blue-700 font-semibold hover:underline">
            Registrarse
        </button>
        </p>

      </div>

    </div>
    <Footer />
    </div>
  );
}

export default Login;