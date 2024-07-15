import { Routes, Route } from 'react-router-dom'
import NavComponent from './components/NavComponent'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import { Toaster } from 'react-hot-toast'
import Container from 'react-bootstrap/Container' 

const App = () => {
  return (
    <div className='d-flex flex-column site-container'>
      <NavComponent />
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <main>
	<Container className="mt-3">
	  <Routes>
	    <Route path='/' element={<HomePage />} />
	    <Route path='/cart' element={<CartPage />} />
	    <Route path='/product/:slug' element={<ProductPage />} />
	  </Routes>
	</Container>
      </main>
    </div>
  )
}

export default App
