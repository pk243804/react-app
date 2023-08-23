import {useState} from 'react'
function MyForm() {
  const [inputs, setInputs] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    setShowDetails(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setShowDetails(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      /> <br/>
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        /> 
        </label><br/>
        <input type="submit" />
        {showDetails?
        <>
        <p>name is {inputs.username}</p>
        <p>age is {inputs.age}</p>
        </>
:null}
    </form>
  )
}
export default MyForm
