import { NavDropdown } from "react-bootstrap"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavbarItem() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="navbar-brand">
              Posts
            </Link>
            <Link to="/book" className="navbar-brand">
              Books
            </Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/add-book" className="text-decoration-none">
                  Add Book
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/add-post" className="text-decoration-none">
                  Add Post
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
