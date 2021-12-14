import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavbarItem() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
            <Link to="/add-post" className="nav-link">
              Add Post
            </Link>
            <Link to="/books" className="nav-link">
              Books
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
