import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/network-data";
import { useState } from "react";
import ToggleTheme from "../components/ToggleTheme";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LocaleContext from "../contexts/LocaleContext";
import { translate } from "../utils";
import ToggleLocale from "../components/ToggleLocale";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { locale } = useContext(LocaleContext);

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
        <h1 className="text-body">{translate(locale, "Registrasi", "Registration")}</h1>
        <p className="text-body">{translate(locale, "Isi data dengan benar!", "Fill the data correctly!")}</p>
        <RegisterInput onRegister={handleRegister} isLoading={isLoading} />
        <p className="text-body">
          {translate(locale, "Sudah punya akun? ", "Already have an account? ")}
          <Link to="/">{translate(locale, "Masuk", "Sign in")}</Link>
        </p>
        <ToggleLocale />
      </div>
      <ToggleTheme />
    </main>
  );
}
