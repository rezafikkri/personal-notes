import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { translate } from "../utils";
import { useContext, useState } from "react";
import LocaleContext from "../contexts/LocaleContext";
import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword
} from "../utils/validate";

export default function RegisterInput({ onRegister, isLoading }) {
  const [name, handleNameChange, nameError, setNameError] = useInput("", validateName);
  const [email, handleEmailChange, emailError, setEmailError] = useInput("", validateEmail);
  const [password, handlePasswordChange, passwordError, setPasswordError] = useInput("", validatePassword);
  const [
    confirmPassword,
    handleConfirmPasswordChange,
    confirmPasswordError,
    setConfirmPasswordError
  ] = useInput("", validateConfirmPassword, password);
  const { locale } = useContext(LocaleContext);

  function handleSubmit(e) {
    e.preventDefault();

    // validate form data before submit
    const { isValid: isNameValid, error: nameValidationError } = validateName(name);
    const { isValid: isEmailValid, error: emailValidationError } = validateEmail(email);
    const { isValid: isPasswordValid, error: passwordValidationError } = validatePassword(password);
    const {
      isValid: isConfirmPasswordValid,
      error: confirmPasswordValidationError
    } = validateConfirmPassword(confirmPassword, password);
    
    // if name error is null and name is invalid then set error
    if (!nameError && !isNameValid) setNameError(nameValidationError);
    if (!emailError && !isEmailValid) setEmailError(emailValidationError);
    if (!passwordError && !passwordError) setPasswordError(passwordValidationError);
    if (!confirmPasswordError && !confirmPasswordError) setConfirmPasswordError(confirmPasswordValidationError);

    // if name or email or password or confirmation password error is not null then cancel submit
    if (nameError || emailError || passwordError || confirmPasswordError) return;
    else if (!isNameValid || !isEmailValid || !isPasswordValid || !isConfirmPasswordValid) return;

    onRegister({
      name,
      email,
      password
    });
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-floating mb-2">
        <input
          type="text"
          className={`form-control ${nameError ? "is-invalid" : ""}`}
          id="name"
          placeholder="..."
          value={name}
          onChange={handleNameChange}
          disabled={isLoading}
        />
        <label htmlFor="name">{translate(locale, "Nama", "Name")}</label>
        <div className="invalid-feedback">
          {nameError ? translate(locale, nameError.id, nameError.en): null}
        </div>
      </div>
      <div className="form-floating mb-4">
        <input
          type="email"
          className={`form-control ${emailError ? "is-invalid" : ""}`}
          id="email"
          placeholder={translate(locale, "nama@contoh.com", "name@example.com")}
          value={email}
          onChange={handleEmailChange}
          disabled={isLoading}
        />
        <label htmlFor="email">{translate(locale, "Alamat email", "Email address")}</label>
        <div className="invalid-feedback">
          {emailError ? translate(locale, emailError.id, emailError.en) : null}
        </div>
      </div>

      <div className="form-floating mb-2">
        <input
          type="password"
          className={`form-control ${passwordError ? "is-invalid" : ""}`}
          id="password"
          placeholder="..."
          value={password}
          onChange={handlePasswordChange}
          disabled={isLoading}
        />
        <label htmlFor="password">{translate(locale, "Kata sandi", "Password")}</label>
        <div className="invalid-feedback">
          {passwordError ? translate(locale, passwordError.id, passwordError.en) : null}
        </div>
      </div>
      <div className="form-floating mb-4">
        <input
          type="password"
          className={`form-control ${confirmPasswordError ? "is-invalid" : "" }`}
          id="confirm-password"
          placeholder="..."
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          disabled={isLoading}
        />
        <label htmlFor="confirm-password">
          {translate(locale, "Konfirmasi kata sandi", "Confirmation password")}
        </label>
        <div className="invalid-feedback">
          {confirmPasswordError ? translate(locale, confirmPasswordError.id, confirmPasswordError.en) : null}
        </div>
      </div>
      <button type="submit" className="w-100 py-2 btn btn-primary mb-3" disabled={isLoading}>
        {isLoading ? (
          <span className="spinner-border spinner-border-sm"></span>
        ) : translate(locale, "Daftar", "Sign up") }
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  onRegister: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};
