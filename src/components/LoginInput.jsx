import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import { translate } from "../utils";

export default function LoginInput({ onLogin, isLoading }) {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const { locale } = useContext(LocaleContext);

  function handleSubmit(e) {
    e.preventDefault();

    onLogin({
      email,
      password
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-2">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder={translate(locale, "nama@contoh.com", "name@example.com")}
          value={email}
          onChange={setEmail}
          disabled={isLoading}
        />
        <label htmlFor="email">{translate(locale, "Alamat email", "Email address")}</label>
      </div>
      <div className="form-floating mb-4">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder={translate(locale, "Kata sandi", "Password")}
          value={password}
          onChange={setPassword}
          disabled={isLoading}
        />
        <label htmlFor="password">{translate(locale, "Kata sandi", "Password")}</label>
      </div>
      <button type="submit" className="w-100 py-2 btn btn-primary mb-3" disabled={isLoading}>
        {isLoading ? (
          <span className="spinner-border spinner-border-sm"></span>
        ) : translate(locale, "Masuk", "Sign in") }
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};
