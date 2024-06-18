import { useState } from 'react'

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })


  const loginUser = (event) => {
    event.preventDefault()
  }

  const handleEmailChange = (event) => {
    setData({...data, email: event.target.value})
  }

  const handlePasswordChange = (event) => {
    setData({...data, password: event.target.value})
  }
   
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type='email' placeholder='enter email...' value={data.email} onChange={handleEmailChange} />
        <label>Password</label>
        <input type='password' placeholder='enter password...' value={data.password} onChange={handlePasswordChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
