import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/network-data";
import { useState } from "react";
import SpinnerLoading from "../components/SpinnerLoading";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  async function handleRegister(user) {
    setLoading(true);

    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }

    setLoading(false);
  }

  return (
    <div className="col-sm-6 col-lg-4 mx-auto px-4 py-5 position-relative">
      <h1>Registrasi</h1>
      <p>Isi data dengan benar!</p>
      <RegisterInput onRegister={handleRegister} />
      <p>Sudah punya akun? <Link to="/">Masuk</Link></p>
      
      <SpinnerLoading isLoading={isLoading} />
    </div>
  );
}
