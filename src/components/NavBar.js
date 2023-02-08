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
 const GHLink = ("https://github.com/sagesaintsalem");
 const LinkedIn = ("https://www.linkedin.com/in/rita-toussaint/");


const NavBar = () => {
    return (
      <Navbar>        
          <Container>
              <Navbar.Brand href="/portfolio"><img src="./images/chillime.jpg" width="41px" height="56px"/></Navbar.Brand>
              
              <Link to="/projects">Projects</Link>

              <Link to={GHLink}><span src="./images/github.png"></span></Link>

              <Link to={LinkedIn}><span src="./images/linkedblack.png"></span></Link>
           
          </Container>
      
      </Navbar>
      );

}

export default NavBar;