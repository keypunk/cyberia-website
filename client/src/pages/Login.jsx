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
   
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type='email' placeholder='enter email...' />
        <label>Password</label>
        <input type='password' placeholder='enter password...' />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
