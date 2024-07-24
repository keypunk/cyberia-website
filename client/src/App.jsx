import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavComponent from './components/NavComponent'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import SigninPage from './pages/SigninPage'
import ShippingAddressPage from './pages/ShippingAddressPage'
import Container from 'react-bootstrap/Container' 

const App = () => {
  return (
    <div className='d-flex flex-column site-container'>
    <ToastContainer position="bottom-center" limit={1} />
      <NavComponent />
      <main>
	<Container className="mt-3">
	  <Routes>
	    <Route path='/' element={<HomePage />} />
	    <Route path='/cart' element={<CartPage />} />
	    <Route path='/signin' element={<SigninPage />} />
	    <Route path='/shipping' element={<ShippingAddressPage />} />
	    <Route path='/product/:slug' element={<ProductPage />} />
	  </Routes>
	</Container>
      </main>
    </div>
  )
}

export default App
