import { Link } from "react-router-dom";
const Goals = ({goals}) => {
  return (
    <>
    <h1>List of Goals</h1>
    <div>
      {goals.map(goal =>
        <Link to='/goalDetail' key={goal._id} state={goal}>
          <p>{goal.description}</p>
          <p>{goal.completed}</p>
        </Link>
        )}
    </div>
    </>
  );
}
 
export default Goals;