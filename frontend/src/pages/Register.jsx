import React, { useState } from "react";
import Button from "../UI/Button/Button";

const Register = () => {
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = registerFormData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const click = () => {
    console.log("Register clicked");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(registerFormData);
  };
  return (
    <>
      <section>
        <h2>Register an account</h2>
      </section>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
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
        <div className="mb-3">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password2"
            className="form-control"
            id="password2"
            name="password2"
            value={password2}
            onChange={handleChange}
          />
        </div>
        <div>
          {/* <button type="submit" className="btn btn-primary">
            Register
          </button> */}
          <Button type="submit" click={click}>
            Register
          </Button>
        </div>
      </form>
    </>
  );
};

export default Register;
