import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Logo } from '../logo/logo.component';
import { NavEndContent } from '../nav-end-content/nav-end-content.component';
import { NavStartContent } from '../nav-start-content/nav-start-content.component';
import './nav-bar.component.sass';

export const NavBar = () => (
  <>
    <Navbar variant="dark">
      <Container>
        <Link to="/movies">
          <Logo />
        </Link>
        <Nav className="me-auto">
          <NavStartContent />
        </Nav>
        <Nav className="ml-auto">
          <NavEndContent />
        </Nav>
      </Container>
    </Navbar>
  </>
);
