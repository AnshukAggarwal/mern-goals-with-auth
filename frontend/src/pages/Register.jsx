import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addUserAsync, resetState } from "../redux/actions/authActions";
import Button from "../UI/Button/Button";
import Spinner from "../UI/Spinner/Spinner";

const Register = () => {
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = registerFormData;

  const { user, loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
      });
    }

    if (user) {
      history.push("/");
    }
    return () => {
      dispatch(resetState());
    };
  }, [error, user, history, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords dont match", {
        position: "top-center",
      });
    } else if (!password || !password2) {
      toast.error("Passwords missing", {
        position: "top-center",
      });
    } else {
      dispatch(addUserAsync(registerFormData));
    }
  };

  if (loading) {
    return <Spinner />;
  } else {
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
              type="password"
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
            <Button type="submit">Register</Button>
          </div>
        </form>
      </>
    );
  }
};

export default Register;
