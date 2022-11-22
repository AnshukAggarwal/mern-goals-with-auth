import React from "react";
import Button from "../UI/Button/Button";

const Register = () => {
  const click = () => {
    console.log("Register clicked");
  };

  const handleRegister = (e) => {
    e.preventDefault();
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
          <input type="text" className="form-control" id="name" name="name" />
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
        <div className="mb-3">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password2"
            className="form-control"
            id="password2"
            name="password2"
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
