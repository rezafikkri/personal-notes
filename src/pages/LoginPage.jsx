import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";
import { useState } from "react";
import PropTypes from "prop-types";
import ToggleTheme from "../components/ToggleTheme";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import ToggleLocale from "../components/ToggleLocale";
import { translate } from "../utils";
import LocaleContext from "../contexts/LocaleContext";

export default function LoginPage({ loginSuccess }) {
  const [isLoading, setLoading] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { locale } = useContext(LocaleContext);

  async function handleLogin(user) {
    setLoading(true);
    const { error, data } = await login(user);

    if (!error) {
      await loginSuccess(data);
    }

    setLoading(false);
  }

  return (
    <main data-bs-theme={theme} className="min-vh-100 bg-body-tertiary">
      <div className="login w-100 mx-auto py-5">
        <h1 className="text-body">{translate(locale, "Masuk", "Sign in")}</h1>
        <LoginInput onLogin={handleLogin} isLoading={isLoading} />
        <p className="text-body">
          {translate(locale, "Belum punya akun? ", "Don't have an account? ")}
          <Link to="/register">{translate(locale, "Buat", "Create")}</Link>
        </p>
        <ToggleLocale />
      </div>
      <ToggleTheme />
    </main>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired
};
