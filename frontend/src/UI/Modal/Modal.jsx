import React, { useState } from "react";
import styles from "./Modal.module.css";
import { updateGoalAsync } from "../../redux/actions/goalActions";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";

const Modal = ({ type, hideModal, deleteGoal, goal }) => {
  const [goalText, setGoalText] = useState(goal.text);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setGoalText(e.target.value);
  };

  const handleUpdateGoal = (e) => {
    e.preventDefault();
    const updatedGoal = {
      text: goalText,
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
                  onChange={handleChange}
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
            <Button click={hideModal}>No</Button>
            <Button click={deleteGoal}>Yes</Button>
          </section>
        </div>
      </>
    );
  }
};

export default Modal;
