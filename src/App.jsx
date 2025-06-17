
import Home from "./components/Home/home";
import About from "./components/About/Home/About";
// import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";

import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";

import './App.css'

function App() {
  return (
    <div className={styles.App}>
      <div className="">
        <Navbar/>
      </div>
    

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      {/* <Route path="/resume" element={<Resume/>}/> */}
      <Route path="/projects" element={<Projects/>}/>
    </Routes>

    <div>
      <Footer/>
    </div>

    </div>
    );
}

export default App;
