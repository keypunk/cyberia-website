import { useState } from 'react'
import api from '../services/api'

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })


  const loginUser = (event) => {
    event.preventDefault()
    api.get('/')
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
        <label>E-Mail</label>
        <input type='email' placeholder='Enter e-mail...' value={data.email} onChange={handleEmailChange} />
        <label>Password</label>
        <input type='password' placeholder='Enter password...' value={data.password} onChange={handlePasswordChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
