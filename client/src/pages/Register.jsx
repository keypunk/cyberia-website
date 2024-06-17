import { useState } from 'react'

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const registerUser = (event) => {
    event.preventDefault()
  }

  const handleNameChange = (event) => {
    setData({...data, name: event.target.value})
  }

  const handleEmailChange = (event) => {
    setData({...data, email: event.target.value})
  }

  const handlePasswordChange = (event) => {
    setData({...data, password: event.target.value})
  }
  
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='text' placeholder='enter name...' value={data.name} onChange={handleNameChange} />
        <label>Name</label>
        <input type='email' placeholder='enter email...' value={data.email} onChange={handleEmailChange} />
        <label>Name</label>
        <input type='password' placeholder='enter password...' value={data.password} onChange={handlePasswordChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )



export default Register
