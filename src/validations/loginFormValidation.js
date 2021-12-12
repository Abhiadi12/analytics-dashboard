const isValidEmail = (value) => {
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (value.length == 0) return "Email can't be empty";
  else {
    return EMAIL_REGEX.test(value) ? null : "Please enter a valid email";
  }
};

const atleastOneUpperCaseInPassword = (value) => {
  let count = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] >= "A" && value[i] <= "Z") count++;
  }
  return count > 0;
};

const isValidPassword = (value) => {
  const lengthOfString = value.length;
  if (lengthOfString == 0) return "Password can't be empty";
  else {
    return lengthOfString >= 6
      ? atleastOneUpperCaseInPassword(value)
        ? null
        : "Password contains atleast one uppercase letter"
      : "Password must contains atleast 6 characters";
  }
};

export const loginFormValidator = {
  email: (email) => isValidEmail(email),
  password: (password) => isValidPassword(password),
};
