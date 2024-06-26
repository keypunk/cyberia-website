import { useState } from 'react'
import registerService from '../services/register'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const Register = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const registerUser = async (event) => {
    event.preventDefault()
    const { name, email, password } = data
    try {
      const { data } = await registerService.create(name, email, password)
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Registration successful. Welcome!')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
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
        <input type='text' placeholder='Enter name...' value={data.name} onChange={handleNameChange} />
        <label>E-Mail</label>
        <input type='email' placeholder='Enter email...' value={data.email} onChange={handleEmailChange} />
        <label>Password</label>
        <input type='password' placeholder='Enter password...' value={data.password} onChange={handlePasswordChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Register
