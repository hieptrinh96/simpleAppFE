import { Link } from "react-router-dom";
const GoalDetail = ({goal}) => {
  return (
    <>
    <p>{goal.description}</p>
    <Link to='/goals/:goalId/edit' state={goal}>
    <button>Update Goal</button>
    </Link>
    </>
  );
}
 
export default GoalDetail;