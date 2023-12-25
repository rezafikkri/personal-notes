function validateTitle(title) {
  if (title.length <= 0) {
    return {
      isValid: false,
      error: {
        id: "Judul catatan tidak boleh kosong.",
        en: "Note title cannot be empty."
      }
    };
  } 

  return { isValid: true, error: null };
}

function validateBody(body) {
  if (body.length <= 0) {
    return {
      isValid: false,
      error: {
        id: "Isi catatan tidak boleh kosong.",
        en: "Note content cannot be empty."
      }
    };
  }

  return { isValid: true, error: null };
}

function validateName(name) {
  if (name.length <= 0) {
    return {
      isValid: false,
      error: {
        id: "Nama tidak boleh kosong.",
        en: "Name cannot be empty."
      }
    };
  }

  return { isValid: true, error: null };
}

function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.length <= 0) {
    return {
      isValid: false,
      error: {
        id: "Alamat email tidak boleh kosong.",
        en: "Email address cannot be empty."
      }
    };
  } else if (!email.match(regex)) {
    return {
      isValid: false,
      error: {
        id: "Alamat email tidak valid.",
        en: "Email address is invalid."
      }
    };
  }

  return { isValid: true, error: null };
}

function validatePassword(password) {
  if (password.length <= 0) {
    return {
      isValid: false,
      error: {
        id: "Kata sandi tidak boleh kosong.",
        en: "Password cannot be empty."
      }
    };
  } else if (password.length < 6) {
    return {
      isValid: false,
      error: {
        id: "Kata sandi harus minimal 6 karakter.",
        en: "Password must be at least 6 characters."
      }
    };
  }

  return { isValid: true, error: null };
}

function validateConfirmPassword(confirmPassword, password) {
  if (confirmPassword.length <= 0) {
    return {
      isValid: false,
      error: {
        id: "Konfirmasi kata sandi tidak boleh kosong.",
        en: "Confirmation password cannot be empty."
      }
    };
  } else if (confirmPassword !== password) {
    return {
      isValid: false,
      error: {
        id: "Konfirmasi kata sandi dan kata sandi tidak sama.",
        en: "Confirmation password and password are not the same."
      }
    };
  }

  return { isValid: true, error: null };
}

export {
  validateTitle,
  validateBody,
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword
};
