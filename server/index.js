import express from 'express'
import data from './data.js'
import mongoose from 'mongoose'


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('connected to db')
  })
  .catch((err) => {
    console.log(err.message)
  })

const app = express()

app.get('/api/products', (req, res) => {
  res.send(data.products)
})

app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find(product => product.slug === req.params.slug)
  if (product) {
    res.send(product)
  } else {
    res.status(404).send({message: 'Product Not Found'})
  }
})

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find(product => product._id === req.params.id)
  if (product) {
    res.send(product)
  } else {
    res.status(404).send({message: 'Product Not Found'})
  }
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`)
})
