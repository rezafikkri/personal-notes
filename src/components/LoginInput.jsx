import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

export default function LoginInput({ onLogin }) {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

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
          placeholder="name@example.com"
          value={email}
          onChange={setEmail}
        />
        <label htmlFor="email">Email address</label>
      </div>
      <div className="form-floating mb-4">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
        <label htmlFor="password">Password</label>
      </div>
      <button type="submit" className="w-100 py-2 btn btn-primary mb-3">Masuk</button>
    </form>
  );
}

LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired
};
