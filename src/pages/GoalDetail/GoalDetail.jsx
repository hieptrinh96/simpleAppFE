import { useLocation } from "react-router-dom";
const GoalDetail = () => {
  const { state } = useLocation()
  return (
    <>
    <h1>Goal Detail</h1>
    <p>{state.goal.description}</p>
    </>
  );
}
 
export default GoalDetail;