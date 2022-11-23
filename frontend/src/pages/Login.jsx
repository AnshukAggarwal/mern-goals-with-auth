import React, { useState } from "react";
import Button from "../UI/Button/Button";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginFormData;

  const click = () => {
    console.log("Login clicked");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginFormData);
  };
  return (
    <>
      <section>
        <h2>Login to access your account</h2>
      </section>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button type="submit" click={click}>
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default Login;
