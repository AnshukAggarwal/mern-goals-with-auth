import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button/Button";
import { addGoalAsync, resetState } from "../../redux/actions/goalActions";
import styles from "./AddGoal.module.css";

const AddGoal = () => {
  const [goal, setGoal] = useState("");
  const dispatch = useDispatch();
  const { error, success } = useSelector((state) => state.goal);

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error, {
  //       position: "top-center",
  //     });
  //   }
  //   if (success) {
  //     toast.success("Goal added", {
  //       position: "top-center",
  //     });
  //   }
  //   return () => {
  //     dispatch(resetState());
  //   };
  // }, [dispatch, error, goal, success]);

  const handleGoalTextChange = (e) => {
    setGoal(e.target.value);
  };

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!goal) {
      toast.error(error, {
        position: "top-center",
      });
    }
    dispatch(addGoalAsync({ text: goal }));
    setGoal("");
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
        <div>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </>
  );
};

export default AddGoal;
