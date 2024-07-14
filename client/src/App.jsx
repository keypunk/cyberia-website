import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <Routes>
	<Route path='/' element={<Home />} />
	<Route path='/register' element={<Register />} />
	<Route path='/login' element={<Login />} />
	<Route path='/product/:slug' element={<Product />} />
      </Routes>
    </>
  )
}

export default App
