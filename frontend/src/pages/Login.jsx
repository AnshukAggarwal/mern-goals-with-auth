import React from "react";
import Button from "../UI/Button/Button";

const Login = () => {
  const click = () => {
    console.log("Login clicked");
  };

  const handleLogin = (e) => {
    e.preventDefault();
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
