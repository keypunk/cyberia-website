import { useEffect, useState } from react
import { Link } from 'react-router-dom'
import data from '../data'

const Home = () => {
  // Implement after backend is ready
  //
  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   const fetchData = async() => {
  //     const result = await axios.get('api/products')
  //     setProducts(result.data)
  //   }
  //   fetchData()
  // }, [])

  return (
    <div>
      <main>
        <h1>Featured Products</h1>
        <div className='products'>
          {data.products.map(product => (
              <div className='product' key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <div className='product-info'>
                  <Link to={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </Link>
                  <p>
                    <strong>{product.price}€</strong>
                  </p>
                  <button>Add to cart</button>
                </div>
              </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
