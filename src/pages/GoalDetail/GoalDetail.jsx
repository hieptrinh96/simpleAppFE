import { Link } from "react-router-dom";
const GoalDetail = ({goal}) => {
  return (
    <>
    <Link to='/goals/:goalId/edit' state={goal}>
    <p>{goal.description}</p>
    <small><p>{goal.createdAt}</p></small>
    </Link>
    </>
  );
}
 
export default GoalDetail;