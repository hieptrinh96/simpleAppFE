import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const GoalDetail = () => {
  const { state } = useLocation({})
  return (
    <>
    <h1>Goal Detail</h1>
    <p>{state.description}</p>
    <Link to='/goals/:goalId/edit'>
    <button>Update Goal</button>
    </Link>
    </>
  );
}
 
export default GoalDetail;