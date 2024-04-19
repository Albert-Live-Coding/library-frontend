import { useState } from "react";
import "../components/LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      console.log("Formular ist gültig. Senden...");
    } else {
      if (!isEmailValid) {
        setEmailError("Ungültige E-Mail-Adresse");
      } else {
        setEmailError("");
      }

      if (!isPasswordValid) {
        setPasswordError("Passwort muss zwischen 4 und 20 Zeichen lang sein");
      } else {
        setPasswordError("");
      }
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^.{4,20}$/;
    return regex.test(password);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="E-Mail-Adresse"
          value={email}
          onChange={emailHandler}
        />
        {emailError && <div className="error">{emailError}</div>}
        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={passwordHandler}
        />
        {passwordError && <div className="error">{passwordError}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
