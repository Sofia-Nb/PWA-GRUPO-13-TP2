import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { registerUser } from '../../const/auth';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Register = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const data = await registerUser(nombre, email, password);
      console.log(data);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
        <Header />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">

        <div className="flex flex-col items-center mb-8">
          <div className="bg-green-600 p-4 rounded-full text-white text-3xl">
          </div>

          <h1 className="text-3xl font-bold mt-4 text-gray-800">
            Crear Cuenta
          </h1>

          <p className="text-gray-500 mt-2 text-center">
            Registrate para comenzar a explorar <span className="font-semibold">Type Tanks</span>
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Nombre
            </label>

            <input
              type="text"
              placeholder="Pedro"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Correo electrónico
            </label>

            <input
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {error && <p>{error}</p>}

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Confirmar contraseña
            </label>

            <input
              type="password"
              placeholder="********"
              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 rounded-lg"
          >
            Crear Cuenta
          </button>

        </form>

       <p className="text-center mt-6 text-gray-600">
        ¿Ya tienes una cuenta?{" "}
        <button
        type="button"
        onClick={() => navigate("/login")}
        className="text-blue-700 font-semibold hover:underline">
            Iniciar sesión
            </button>
            </p>

      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Register;