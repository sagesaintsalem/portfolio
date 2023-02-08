import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';



const NavWrap = styled.div`
   background-color: #cc85ff;
`
const OffContents = styled.div`
  display: flex;
  flex-direction: column;
`


 const GHLink = ("https://github.com/sagesaintsalem");
 const LinkedIn = ("https://www.linkedin.com/in/rita-toussaint/");


const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <NavWrap>
        <Navbar id="navbar">        
            <Container>
                <Navbar.Brand href="/portfolio"><img src="./images/chillime.jpg" width="41px" height="56px"/>Rita Toussaint</Navbar.Brand>
                  <div>
                    <Button variant="success" onClick={handleShow}><img src="./images/hamborgmenu.png"/></Button>
                    <Offcanvas show={show} onHide={handleClose}>
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Main Menu</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <OffContents>
                          <Link to="/projects"><p>Projects</p></Link>

                          <Link to="/faqs">FAQs</Link>

                          <a href={GHLink}><img src="./images/github.png"/>My GitHub</a>

                          <a href={LinkedIn}><img src="./images/linkedblack.png"/>My LinkedIn</a>
                        </OffContents>
                      </Offcanvas.Body>
                    </Offcanvas>

                  </div>
            
            </Container>
        
        </Navbar>
      </NavWrap>
      );

}

export default NavBar;