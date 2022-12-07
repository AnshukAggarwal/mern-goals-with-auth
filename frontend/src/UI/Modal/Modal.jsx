import React, { useState } from "react";
import styles from "./Modal.module.css";
import { updateGoalAsync } from "../../redux/actions/goalActions";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { FaCheck, FaTimes } from "react-icons/fa";

const Modal = ({ type, hideModal, deleteGoal, goal }) => {
  // Set the intial value for the due date in "yyyy-mm-dd" format
  const dueDate = new Date(goal.dueDate);
  const month = dueDate.getMonth() + 1;
  const day =
    dueDate.getDate() + 1 > 9
      ? dueDate.getDate() + 1
      : `0${dueDate.getDate() + 1}`;
  const year = dueDate.getFullYear();
  const [goalText, setGoalText] = useState(goal.text);
  const [goalDate, setGoalDate] = useState(`${year}-${month}-${day}`); // Template Literal to set date
  const dispatch = useDispatch();

  const handleGoalTextChange = (e) => {
    setGoalText(e.target.value);
  };

  const handleGoalDateChange = (e) => {
    setGoalDate(e.target.value);
  };

  const handleUpdateGoal = (e) => {
    e.preventDefault();
    const updatedGoal = {
      text: goalText,
      dueDate: goalDate,
    };
    dispatch(updateGoalAsync(updatedGoal, goal._id));
  };
  if (type === "edit") {
    return (
      <>
        <div className={styles.backdrop} onClick={hideModal} />
        <div className={`${styles.modal} ${styles.card}`}>
          <section>
            <p>{`Are you sure you want to edit ${goal.text}`}</p>
            <form className={styles.form} onSubmit={handleUpdateGoal}>
              <div className="mb-3">
                <label htmlFor="upDatedGoal" className="form-label">
                  Goal
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="upDatedGoal"
                  name="goal"
                  value={goalText}
                  onChange={handleGoalTextChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="upDateDueDate" className="form-label">
                  Due Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="upDateDueDate"
                  name="upDateDueDate"
                  value={goalDate}
                  onChange={handleGoalDateChange}
                />
              </div>
              <div>
                <Button type="submit">Update</Button>
              </div>
            </form>
          </section>
        </div>
      </>
    );
  }

  if (type === "delete") {
    return (
      <>
        <div className={styles.backdrop} onClick={hideModal} />
        <div className={`${styles.modal} ${styles.card}`}>
          <section>
            <p>{`Are you sure you want to delete this goal`}</p>
          </section>
          <section className={styles.actions}>
            {/* <button onClick={props.deleteMemory}>Yes</button> */}
            <Button click={deleteGoal}>
              <span className={styles.helper}>
                <FaCheck />
              </span>
              <span className={styles.text}>Yes</span>
            </Button>
            <Button click={hideModal}>
              <span className={styles.helper}>
                <FaTimes />
              </span>
              <span className={styles.text}>No</span>
            </Button>
          </section>
        </div>
      </>
    );
  }
};

export default Modal;

// FaHandPointDown
// FaStop
