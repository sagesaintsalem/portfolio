import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import "./App.css";
import styled from "styled-components";

const AppWrap = styled.div`
    background-color: #cc85ff;
    font-family:'Jost', sans-serif;
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
          </Routes>
      </Router>
    </AppWrap>
  );
}

export default App;