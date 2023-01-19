import GoalDetail from "../GoalDetail/GoalDetail";
const Goals = ({goals}) => {
  return (
    <>
    <h1>List of Goals</h1>
    <div>
      {goals.map(goal =>
        <div key={goal._id}>
          <GoalDetail  goal={goal} />
        </div>
        )}
    </div>
    </>
  );
}
 
export default Goals;