import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import Footer from "./components/footer/Footer";
import Introduction from "./components/introduction/Introduction";
import Navbar from "./components/navbar/Navbar";
import Notes from "./components/notes/Notes";
// import Contact from "./components/pages/Contact";
// import Home from "./components/pages/Home";
// import Work from "./components/pages/Work";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div>
    <Navbar />
    <Introduction />
    <Notes />
    <AboutMe />
    <Projects />
    <Footer />
  </div>
  );
}

export default App;
