import React from "react";
import { loginFormValidator } from "../validations/loginFormValidation";
function useInput(initialValue) {
  const [value, setValue] = React.useState(initialValue);
  const [error, setError] = React.useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue(value);
    const errorMsg = loginFormValidator[name](value);
    if (errorMsg) setError({ [name]: errorMsg });
    else setError({});
  };
  return {
    value,
    handleChange,
    error,
  };
}

export default useInput;
