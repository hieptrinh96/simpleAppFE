import { Link } from "react-router-dom";
import GoalDetail from "../GoalDetail/GoalDetail";
const Goals = ({goals}) => {
  return (
    <>
    <h1>List of Goals</h1>
    <Link to='/add-goal'><button>Add a goal</button></Link>
    <div>
      {goals.map(goal =>
        <div key={goal._id}>
          <GoalDetail  goal={goal} />
        </div>
        )}
        <Link to='/add-goal'>
        </Link>
    </div>
    </>
  );
}
 
export default Goals;