import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
function NavbarItem() {
  return (
    <Navbar bg="light" extend="lg">
      <Container>
        <Link to="/post" className="navbar-brand">
          Posts
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Link to="/book" className="nav-link">
              Book
            </Link>
            <Link to="add-post" className="nav-link">
              Add Post
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
