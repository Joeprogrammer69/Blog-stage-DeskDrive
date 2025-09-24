import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBarBlog = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Blog: Steven Van Cleemput</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/landingpage" passHref legacyBehavior>
              <Nav.Link>LandingsPagina</Nav.Link>
            </Link>

            <Link href="/aboutme" passHref legacyBehavior>
              <Nav.Link>Over mezelf</Nav.Link>
            </Link>

            <Link href="/blogspage" passHref legacyBehavior>
              <Nav.Link>Blogs</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarBlog;
