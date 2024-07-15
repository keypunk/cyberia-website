import Navbar from 'react-bootstrap/Navbar'
import Badge from 'react-bootstrap/Badge'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Store } from '../Store'
import { useContext } from 'react'

const NavComponent = () => {
  const { state } = useContext(Store)
  const { cart } = state
  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Cyberia</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <Link to="/cart" className="nav-link">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavComponent
