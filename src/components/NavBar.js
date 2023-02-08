import styled from 'styled-components';
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


// const NavItems = styled.ul`
//   list-style:none;
//   display: flex;
//   background-color: green;
//   gap: 1em;

// `

const MyNavbar = styled.Navbar`
  background-color: #a46ee6;
`

const NavBar = () => {
    return (
      <MyNavbar>        
          <Container>
              <Navbar.Brand href="/portfolio"><img src="./public/chillime.jpg"/></Navbar.Brand>
              <Link to="/about">About</Link>
              
              <Link to="/projects">Projects</Link>
           
          </Container>
      
      </MyNavbar>
      );

}

export default NavBar;