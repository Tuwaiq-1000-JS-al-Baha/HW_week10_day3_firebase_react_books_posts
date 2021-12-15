import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
function NavbarItem() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          Post
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/add-post" className="nav-link">
              Add Post
            </Link>
            <Link to="/books" className="nav-link">
              Book
            </Link>
            <Link to="/add-book" className="nav-link">
              Add Book
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavbarItem
