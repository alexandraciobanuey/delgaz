import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { FaUser } from 'react-icons/fa'
import logo from '../assets/images/delgaz.png'

const Header = () => {
  return (
    <header>
      <Navbar bg='light' variant='light' expand="lg" collapseOnSelect>
        <Container>
            <Navbar.Brand href="/">
            <img src={logo} alt='Delgaz' width="130" height="70" className="img-fluid " />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/login"><FaUser /> Contul tau</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
