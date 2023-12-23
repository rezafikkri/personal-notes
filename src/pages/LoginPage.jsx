import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";
import { useState } from "react";
import PropTypes from "prop-types";
import ToggleTheme from "../components/ToggleTheme";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function LoginPage({ loginSuccess }) {
  const [isLoading, setLoading] = useState(false);
  const { theme } = useContext(ThemeContext);

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
        <h1 className="text-body">Masuk</h1>
        <LoginInput onLogin={handleLogin} isLoading={isLoading} />
        <p className="text-body">Belum punya akun? <Link to="/register">Buat</Link></p> 
      </div>
      <ToggleTheme />
    </main>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired
};
