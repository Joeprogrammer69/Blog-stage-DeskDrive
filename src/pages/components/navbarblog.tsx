import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/NavBarBlog.module.css";

const NavBarBlog = () => {
  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="shadow-sm py-3">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link
              as={Link}
              href="/"
              className={`mx-3 text-light fw-semibold ${styles.navLinkCustom}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/aboutme"
              className={`mx-3 text-light fw-semibold ${styles.navLinkCustom}`}
            >
              Over mezelf
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/blogspage"
              className={`mx-3 text-light fw-semibold ${styles.navLinkCustom}`}
            >
              Blogs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarBlog;
