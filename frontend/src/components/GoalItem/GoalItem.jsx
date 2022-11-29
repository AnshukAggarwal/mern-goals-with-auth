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

  const toggleShowModal = (type) => {
    setModalType(type);
    setShowModal(!showModal);
  };

  const handleDeleteGoal = () => {
    dispatch(deleteGoalAsync(data._id));
  };
  return (
    <>
      <div className="card mb-5">
        <div className="card-body">
          <h5 className="card-title">
            Date: {new Date(data.createdAt).toLocaleString("en-US")}
          </h5>
          <p className="card-text">{data.text}</p>
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
