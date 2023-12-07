import "./App.css";
import AboutMe from "./components/about-me/AboutMe.jsx";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
// import ScrollSpy from "react-ui-scrollspy";
import "./palette.css";

function App() {
  return (
    <>
      {/* <ScrollSpy> */}
      <Hero />
      {/* <main> */}
      <AboutMe id="about-me" />
      {/* </main> */}
      <Navbar />
      {/* </ScrollSpy> */}
    </>
  );
}

export default App;
