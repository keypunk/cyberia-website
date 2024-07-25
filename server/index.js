import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import seedRouter from './routes/seedRoutes.js'
import productRouter from './routes/productRoutes.js'
import userRouter from './routes/userRoutes.js'
import orderRouter from './routes/orderRoutes.js'


mongoose
  .connect(process.env.MONGO_URL_ATLAS)
  .then(() => {
    console.log('connected to db')
  })
  .catch((err) => {
    console.log(err.message)
  })

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)

const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, '/client/dist')))
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/client/dist/index.html'))
)

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`)
})
