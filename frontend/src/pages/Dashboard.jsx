import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddGoal from "../components/AddGoal/AddGoal";
import { getUserGoals, resetState } from "../redux/actions/goalActions";
import Spinner from "../UI/Spinner/Spinner";
import GoalItem from "../components/GoalItem/GoalItem";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const { goals } = useSelector((state) => state.goal);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
    dispatch(getUserGoals());

    return () => {
      dispatch(resetState());
    };
  }, [user, history, dispatch]);

  return (
    <>
      <section>
        <h2>Welcome {user && user.name}</h2>
      </section>
      <hr />
      <AddGoal />
      {/* {goals.length > 0 && goals.map((g) => <p key={g._id}>{g.text}</p>)} */}
      <section>
        {goals.length > 0 ? (
          <>
            {goals.map((goal) => (
              <GoalItem key={goal._id} data={goal} />
            ))}
          </>
        ) : (
          <Spinner />
        )}
      </section>
    </>
  );
};

export default Dashboard;
