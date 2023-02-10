import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Faqs from "./components/Faqs";
import "./App.css";
import styled from "styled-components";

const AppWrap = styled.div`
    background-color: #cc85ff;
    font-family:'Jost', sans-serif;
    height: 100%;
    background-size:cover;
    
    
`

function App() {
  return (
    <AppWrap className="App">
     
      <Router>
        <NavBar />
          <Routes>
            <Route path="/portfolio" element={< Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/faqs" element={<Faqs />}></Route>
          </Routes>
      </Router>
    </AppWrap>
  );
}

export default App;