import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/NavBarBlog.module.css";

const NavBarBlog = () => {
  const router = useRouter();
  const isActive = (path: string): boolean => router.pathname === path;

  return (
    <Navbar
      expand="lg"
      bg="secondary"
      variant="dark"
      className={`shadow-sm py-3 navbar-font`}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center">
          <Nav>
            <Nav.Link
              as={Link}
              href="/"
              active={isActive("/")}
              className={`mx-3 fw-semibold ${styles.navLinkCustom}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/aboutme"
              active={isActive("/aboutme")}
              className={`mx-3 fw-semibold ${styles.navLinkCustom}`}
            >
              Over mezelf
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/blogspage"
              active={isActive("/blogspage")}
              className={`mx-3 fw-semibold ${styles.navLinkCustom}`}
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