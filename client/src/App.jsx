import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import { Toaster } from 'react-hot-toast'
import Container from 'react-bootstrap/Container' 

const App = () => {
  return (
    <div className='d-flex flex-column site-container'>
      <Nav />
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <main>
	<Container className="mt-3">
	  <Routes>
	    <Route path='/' element={<HomePage />} />
	    <Route path='/product/:slug' element={<ProductPage />} />
	  </Routes>
	</Container>
      </main>
    </div>
  )
}

export default App
