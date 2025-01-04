import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Project from "./components/Project/Project";
import Resume from './components/Resume/Resume'
import Skills from "./components/Skill/Skills";
import Contact from "./components/Contact/Contact";
import Zerodha from "./components/Project/ProjectDetail/Zerodha";
import DevMap from "./components/Project/ProjectDetail/DevMap";
import Weather from "./components/Project/ProjectDetail/Weather";
import ExpenseTracker from "./components/Project/ProjectDetail/ExpenseTracker";
import TextUtility from "./components/Project/ProjectDetail/TextUtility";
import Inotebook from "./components/Project/ProjectDetail/Inotebook";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project-zerodha" element={<Zerodha/>}/>
        <Route path="/project-devmap" element={<DevMap/>}/>
        <Route path="/project-weather" element={<Weather/>}/>
        <Route path="/project-expenseTracker" element={<ExpenseTracker/>}/>
        <Route path="/project-textUtility" element={<TextUtility/>}/>
        <Route path="/project-iNotebook" element={<Inotebook/>}/>
      </Routes>
    </>
  );
}

export default App;
