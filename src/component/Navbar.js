import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavbarItem() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse>
            <Link to="/" className="navbar-brand">
              Firebase
            </Link>
            <Navbar.Toggle />
            <Nav className="me-auto">
              <Link to="/post" className="nav-link">
                post
              </Link>
              <Link to="/add-post" className="nav-link">
                Add Post
              </Link>
              <Link to="/book" className="nav-link">
                books
              </Link>
              <Link to="/add-book" className="nav-link">
                Add book
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarItem
