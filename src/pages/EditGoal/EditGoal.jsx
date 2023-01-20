import { useState } from "react";
import { useLocation } from "react-router-dom";
const EditGoal = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)
  const handleChange = ({ target }) => {
    setForm({...form, [target.name]: target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.handleUpdateGoal(form)
  }

  return (
    <>
    <h2>Edit your Goal</h2>
    <form onSubmit={handleSubmit}>
      <textarea name="description" cols="30" rows="10" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
    <button onClick={() => props.handleDeleteGoal(state._id)}>Delete Goal</button>
    </>
  );
}
 
export default EditGoal;