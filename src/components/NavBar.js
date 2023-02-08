import styled from 'styled-components';
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';



const NavWrap = styled.div`
   background-color: #cc85ff;
`


 const GHLink = ("https://github.com/sagesaintsalem");
 const LinkedIn = ("https://www.linkedin.com/in/rita-toussaint/");


const NavBar = () => {
    return (
      <NavWrap>
        <Navbar id="navbar">        
            <Container>
                <Navbar.Brand href="/portfolio"><img src="./images/chillime.jpg" width="41px" height="56px"/>Rita Toussaint</Navbar.Brand>
                
                <Link to="/projects">Projects</Link>

                <a href={GHLink}><img src="./images/github.png"/></a>

                <a href={LinkedIn}><img src="./images/linkedblack.png"/></a>
            
            </Container>
        
        </Navbar>
      </NavWrap>
      );

}

export default NavBar;