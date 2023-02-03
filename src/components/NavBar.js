import styled from 'styled-components';
import { Link } from "react-router-dom";


const NavItems = styled.ul`
  list-style:none;
  display: flex;
  background-color: green;
  gap: 1em;

`

const NavBar = () => {
    return (
      <>        
          <NavItems>
            <li>
              <Link to="/portfolio">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </NavItems>
      
      </>
      );

}

export default NavBar;