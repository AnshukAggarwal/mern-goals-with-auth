import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button/Button";
import { addGoalAsync } from "../../redux/actions/goalActions";
import styles from "./AddGoal.module.css";

const AddGoal = () => {
  const [goal, setGoal] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.goal);

  const handleGoalTextChange = (e) => {
    setGoal(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!goal) {
      toast.error(error, {
        position: "top-center",
      });
    }
    dispatch(addGoalAsync({ text: goal, dueDate: dueDate }));
    setGoal("");
    setDueDate("");
  };
  return (
    <>
      <h2>Add a Goal</h2>
      <form onSubmit={handleAddGoal} className={styles.form}>
        <div className="mb-3">
          <label htmlFor="goal" className="form-label">
            Goal
          </label>
          <input
            type="text"
            className="form-control"
            id="goal"
            name="goal"
            value={goal}
            onChange={handleGoalTextChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">
            Due Date
          </label>
          <input
            type="date"
            className="form-control"
            id="dueDate"
            name="dueDate"
            value={dueDate}
            onChange={handleDueDateChange}
          />
        </div>
        <div>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </>
  );
};

export default AddGoal;
