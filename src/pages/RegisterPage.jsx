import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/network-data";
import { useState } from "react";
import ToggleTheme from "../components/ToggleTheme";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const { theme } = useContext(ThemeContext);

  async function handleRegister(user) {
    setLoading(true);
    const { error } = await register(user);
    setLoading(false);

    if (!error) {
      navigate("/");
    }
  }

  return (
    <main data-bs-theme={theme} className="min-vh-100 bg-body-tertiary">
      <div className="col-sm-6 col-lg-4 mx-auto px-4 py-5">
        <h1 className="text-body">Registrasi</h1>
        <p className="text-body">Isi data dengan benar!</p>
        <RegisterInput onRegister={handleRegister} isLoading={isLoading} />
        <p className="text-body">Sudah punya akun? <Link to="/">Masuk</Link></p>      
      </div>
      <ToggleTheme />
    </main>
  );
}
