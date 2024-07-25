import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavComponent from './components/NavComponent'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'
import ShippingAddressPage from './pages/ShippingAddressPage'
import Container from 'react-bootstrap/Container' 
import PaymentMethodPage from './pages/PaymentMethodPage'
import PlaceOrderPage from './pages/PlaceOrderPage'
import OrderPage from './pages/OrderPage'
import OrderHistoryPage from './pages/OrderHistoryPage'
import ProfilePage from './pages/ProfilePage'

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
	    <Route path='/signup' element={<SignupPage />} />
	    <Route path='/profile' element={<ProfilePage />} />
	    <Route path='/shipping' element={<ShippingAddressPage />} />
	    <Route path='/payment' element={<PaymentMethodPage />} />
	    <Route path='/placeorder' element={<PlaceOrderPage />} />
	    <Route path='/order/:id' element={<OrderPage />} />
	    <Route path='/orderhistory' element={<OrderHistoryPage />} />
	    <Route path='/product/:slug' element={<ProductPage />} />
	  </Routes>
	</Container>
      </main>
    </div>
  )
}

export default App
