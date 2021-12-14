import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavbarItem() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          Home Work
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavDropdown title="Posts" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to="/" className="nav-link">
                  Posts
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="/add-post" className="nav-link">
                  Add Post
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Books" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to="/books" className="nav-link">
                  {" "}
                  book
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="/add-book" className="nav-link">
                  Add Book
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
