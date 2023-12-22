import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { checkConfirmPassword } from "../utils";

export default function RegisterInput({ onRegister, isLoading }) {
  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [confirmPassword, handleConfirmPasswordChange] = useInput("");

  function handleSubmit(e) {
    e.preventDefault();

    onRegister({
      name,
      email,
      password
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-2">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="..."
          value={name}
          onChange={handleNameChange}
          disabled={isLoading}
        />
        <label htmlFor="name">Nama</label>
      </div>
      <div className="form-floating mb-4">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          value={email}
          onChange={handleEmailChange}
          disabled={isLoading}
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="..."
          value={password}
          onChange={handlePasswordChange}
          disabled={isLoading}
        />
        <label htmlFor="password">Password</label>
      </div>
      <div className="form-floating mb-4">
        <input
          type="password"
          className={`form-control ${checkConfirmPassword(confirmPassword, password)}`}
          id="confirm-password"
          placeholder="..."
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          disabled={isLoading}
        />
        <label htmlFor="confirm-password">Konfirmasi Password</label>
        <div id="validationServerUsernameFeedback" className="invalid-feedback">
          Password tidak sama
        </div>
      </div>
      <button type="submit" className="w-100 py-2 btn btn-primary mb-3" disabled={isLoading}>
        {isLoading ? (
          <span className="spinner-border spinner-border-sm"></span>
        ) : "Daftar" }
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  onRegister: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};
