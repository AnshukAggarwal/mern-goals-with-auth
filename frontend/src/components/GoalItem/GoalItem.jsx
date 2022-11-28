import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Button from "../../UI/Button/Button";
import styles from "./GoalItem.module.css";

const GoalItem = ({ data }) => {
  return (
    <div className="card mb-5">
      <div className="card-body">
        <h5 className="card-title">
          Date: {new Date(data.createdAt).toLocaleString("en-US")}
        </h5>
        <p className="card-text">{data.text}</p>
        <section className={`${styles.actions} mt-3 mb-3`}>
          <Link to="/edit">
            <Button click={() => console.log("edit")}>
              <FaEdit /> Edit
            </Button>
          </Link>
          <Link to="/delete">
            <Button click={() => console.log("delete")}>
              <FaTrash /> Delete
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default GoalItem;
