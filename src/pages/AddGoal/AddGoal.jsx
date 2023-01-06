import { useState } from "react";
const AddGoal = (props) => {
  const [form, setForm] = useState({
    description: '',
    completed: false
  })

  const handleSubmit = e => {
    e.preventDefault()
    props.handleAddGoal(form)
  }

  const handleChange = ({target}) => {
    setForm({...form, [target.name]: target.value})
  }

  return (
    <>
    <p>Create a goal</p>
    <form onSubmit={handleSubmit}>
      <p>Create a goal</p>
      <textarea 
      cols="30" 
      rows="10"
      value={form.description}
      name='description'
      onChange={handleChange}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}
 
export default AddGoal;