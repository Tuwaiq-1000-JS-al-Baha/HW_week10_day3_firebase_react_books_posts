import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavbarItem() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
         Home
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Posts
            </Link>
            <Link to="/add-post" className="nav-link">
              Add Post
            </Link>
            <Link to="/books" className="nav-link">
            Books
            </Link>
            <Link to="/add-books" className="nav-link">
            Add Books
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
