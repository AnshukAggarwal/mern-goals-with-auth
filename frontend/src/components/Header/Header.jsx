import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const { user, loading, error } = useSelector((state) => state.auth);
  console.log(user);

  return (
    <header
      className={`${styles.header} d-flex justify-content-between align-items-center p-3 mb-5`}
    >
      <div className="logo">
        <Link to="/">
          <h1>Goals</h1>
        </Link>
      </div>
      <ul className="nav">
        {user ? (
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Logout
            </Link>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
