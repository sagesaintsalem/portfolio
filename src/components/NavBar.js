import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from'react-bootstrap/Badge';



const NavBar = () => {
  return (
    <>        
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>It Me</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/portfolio">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <div>

      </div>
    </>
  );

}

export default NavBar;