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

      
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Link href="/" passHref legacyBehavior>
              <Nav.Link className="mx-3">LandingsPagina</Nav.Link>
            </Link>

            <Link href="/aboutme" passHref legacyBehavior>
              <Nav.Link className="mx-3">Over mezelf</Nav.Link>
            </Link>

            <Link href="/blogspage" passHref legacyBehavior>
              <Nav.Link className="mx-3">Blogs</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarBlog;
