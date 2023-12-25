import { useState } from 'react';

function useInput(defaultValue = "", validate = null, ...validateArgs) {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState(null);

  const handleValueChange = (e) => {
    if (validate) {
      const { isValid, error} = validate(e.target.value, ...validateArgs);
      if (!isValid) setError(error);
      if (isValid) setError(null);
    }

    setValue(e.target.value);
  };

  return [value, handleValueChange, error, setError];
}

export default useInput;
