const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth')


const test = (req, res) => {
  res.json('test is working')
}

// Registration endpoint (declared at authRoutes.js in routes dir)
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body 
    // Check if name is empty (using the truthy and falsy property of null and non-null values)
    if (!name) {
      return res.json({
        error: 'Name is required'
      })
    }

    // Check if password is 'good'
    if (!password || password.length < 6) {
      return res.json({
        error: 'Password is required and should be at least 6 characters long'
      })
    }

    // Check if email already exists
    const emailAlreadyExists = await User.findOne({email})

    if (emailAlreadyExists) {
      return res.json({
        error: 'E-Mail is taken already'
      })
    }

    const hashedPassword = await hashPassword(password)

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    })

    return res.json(user)
  } catch (error) {
    console.log(error)
  } 
}

// Login Endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    // Check if user exists
    const user = await User.findOne({email})
    if (!user) {
      return res.json({
        error: 'No user found'
      })
    }

    // Check if passwords match
    const match = await comparePassword(password, user.password)
    if (match) {
      res.json('passwords match')
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  test,
  registerUser,
  loginUser
}
