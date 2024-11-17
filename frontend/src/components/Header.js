import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
    <Container>
        <Navbar.Brand href="/">ProShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <nav className="ml-auto">
                <Nav.Link href="/Cart">Cart</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
            </nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
    </header>
  )
}

export default Header
