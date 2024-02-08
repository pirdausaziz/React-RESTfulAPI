import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const NavbarApp = () => {
    return (

        <Navbar bg="primary" data-bs-theme="dark">
        <Container >
          <Navbar.Brand as={Link} to="/">Admin Website</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/subject">Subject</Nav.Link>
            <Nav.Link as={Link} to="/teacher">Teacher</Nav.Link>
            <Nav.Link as={Link} to="/student">Student</Nav.Link>
          </Nav>
        </Container>
        </Navbar> 
    );
};

export default NavbarApp;