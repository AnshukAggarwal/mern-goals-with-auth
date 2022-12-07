import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import styles from "./GoalItem.module.css";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import { deleteGoalAsync } from "../../redux/actions/goalActions";

const GoalItem = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const dispatch = useDispatch();

  //Subtract today's date from due Date

  const today = new Date();
  const due = new Date(data.dueDate);
  const diffInTime = due.getTime() - today.getTime();
  const diffInDays = (diffInTime / (1000 * 3600 * 24)).toFixed(0);

  const toggleShowModal = (type) => {
    setModalType(type);
    setShowModal(!showModal);
  };

  const handleDeleteGoal = () => {
    dispatch(deleteGoalAsync(data._id));
  };
  return (
    <>
      <div
        className={`card mb-5 ${
          diffInDays > 20
            ? `${styles.low}`
            : diffInDays > 10 && diffInDays <= 20
            ? `${styles.medium}`
            : diffInDays <= 10
            ? `${styles.high}`
            : ""
        }`}
      >
        {/* Set different border colors for the card using ternary operator */}
        <div className="card-body">
          <p className="card-title">
            <strong>Date Set: {new Date(data.createdAt).toDateString()}</strong>
          </p>
          <p className="card-title">
            <strong>
              Due Date: {new Date(due.getTime() + 86400000).toDateString()}
            </strong>
          </p>
          {diffInDays > 0 && (
            <p className="card-title">
              <strong>
                Due In:{" "}
                {`${
                  diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`
                }`}
              </strong>
            </p>
          )}
          <h3 className="card-text">{data.text}</h3>
          <section className={`${styles.actions} mt-3 mb-3`}>
            <Button click={() => toggleShowModal("edit")}>
              <FaEdit /> Edit
            </Button>
            <Button click={() => toggleShowModal("delete")}>
              <FaTrash /> Delete
            </Button>
          </section>
        </div>
      </div>
      {showModal && (
        <Modal
          type={modalType}
          hideModal={toggleShowModal}
          deleteGoal={handleDeleteGoal}
          goal={data}
        />
      )}
    </>
  );
};

export default GoalItem;
