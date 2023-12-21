import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";
import SpinnerLoading from "../components/SpinnerLoading";
import { useState } from "react";
import PropTypes from "prop-types";

export default function LoginPage({ loginSuccess }) {
  const [isLoading, setLoading] = useState(false);

  async function handleLogin(user) {
    setLoading(true);
    const { error, data } = await login(user);

    if (!error) {
      await loginSuccess(data);
    }

    setLoading(false);
  }

  return (
    <div className="login w-100 mx-auto py-5 position-relative">
      <h1>Masuk</h1>
      <LoginInput onLogin={handleLogin} />
      <p>Belum punya akun? <Link to="/register">Buat</Link></p>

      <SpinnerLoading isLoading={isLoading} />
    </div>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired
};
