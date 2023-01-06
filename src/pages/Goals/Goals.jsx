
const Goals = ({goals}) => {
  return (
    <>
    <h1>List of Goals</h1>
    <div>
      {goals.map(goal =>
        <div key={goal._id}>
          <p>{goal.description}</p>
          <p>{goal.completed}</p>
        </div>
        )}
    </div>
    </>
  );
}
 
export default Goals;