import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';




const NavWrap = styled.div`
   background-color: #cc85ff;
`
const OffCaColour = styled.div`
  background-color: rgb(204, 247, 174, 0.75);
  height: 1080px;
`

const OffContents = styled.div`
  display: flex;
  flex-direction: column;
`

const SocialDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1em 0em;
`
const NoTextDec = {
  textDecoration: "none",
  color: "black",
  fontSize: "22px"
  
};



// const NoMargins = {
//   margin: "0px 5px",
//   padding: "1em",
//   width: "1280px",
  
// }


 const GHLink = ("https://github.com/sagesaintsalem");
 const LinkedIn = ("https://www.linkedin.com/in/rita-toussaint/");


const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <NavWrap>
        <Navbar id="navbar">        
            <Container breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
                <Navbar.Brand href="/portfolio"><img src="./images/chillime.jpg" width="41px" height="56px"/>Rita Toussaint</Navbar.Brand>
                  <div>
                    <Button variant="transparent" onClick={handleShow}><img src="./images/hamborgmenu.png"/></Button>
                    
                      <Offcanvas show={show} onHide={handleClose}>
                        <OffCaColour>
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title><h3>Main Menu</h3></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                          <OffContents>
                            <Link to="/projects" style={NoTextDec}>Projects</Link>

                            <Link to="/faqs" style={NoTextDec}>FAQs</Link>
                            <SocialDiv>
                              <a href={GHLink}><img src="./images/github.png"/></a>
                              <a href={LinkedIn}><img src="./images/linkedblack.png"/></a>
                            </SocialDiv>
                          </OffContents>
                        </Offcanvas.Body>
                        </OffCaColour>
                      </Offcanvas>


                  </div>
            
            </Container>
        
        </Navbar>
      </NavWrap>
      );

}

export default NavBar;