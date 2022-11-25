import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { FaUser, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import styles from "./Header.module.css";
import { logOut } from "../../redux/actions/authActions";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    Redirect("/login");
  };

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
            <Link to="/login" className="nav-link" onClick={handleLogOut}>
              <FaSignOutAlt /> Logout
            </Link>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
