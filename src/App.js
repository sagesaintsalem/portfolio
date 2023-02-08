import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import "./App.css";


function App() {
  return (
    <div className="App">
     
      <Router>
        <NavBar />
          <Routes>
            <Route path="/portfolio" element={< Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;