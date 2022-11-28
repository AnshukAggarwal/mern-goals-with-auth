import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUserAsync, resetState } from "../redux/actions/authActions";
import Button from "../UI/Button/Button";
import Spinner from "../UI/Spinner/Spinner";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginFormData;

  const dispatch = useDispatch();
  const history = useHistory();
  const { user, loading, error } = useSelector((state) => state.auth);

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
    setLoginFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (error) {
      toast.error(error, {
        position: "top-center",
      });
    } else {
      dispatch(loginUserAsync(loginFormData));
    }
  };

  return loading ? (
    <Spinner />
  ) : (
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
          <Button type="submit">Login</Button>
        </div>
      </form>
    </>
  );
};

export default Login;
