import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'

const Nav = () => {
  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Cyberia</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  )
}

export default Nav
