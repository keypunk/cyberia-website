// Import Modules
const express = require('express')
const cors = require('cors')
const { mongoose } = require('mongoose')
const app = express()

// Database Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Database not connected', err))


// Middleware

app.use(express.json())

app.use('/', require('./routes/authRoutes'))

const PORT = 8080
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
