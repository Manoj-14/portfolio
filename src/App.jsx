import "./App.css";
import AboutMe from "./components/about-me/AboutMe.jsx";
import Contact from "./components/contact/Contact.jsx";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Project from "./components/projects/Project.jsx";
// import ScrollSpy from "react-ui-scrollspy";
import "./palette.css";
import { gsap, CSSPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(CSSPlugin, ScrollTrigger);

function App() {
  gsap.to("progress", {
    value: 100,
    ease: "none",
    scrollTrigger: {
      trigger: "#about-me",
      scrub: 0.3,
    },
  });
  return (
    <>
      <progress max={100} value={0}></progress>
      {/* <ScrollSpy> */}
      <Hero />
      {/* <main> */}
      <AboutMe id="about-me" />
      <Project />
      {/* </main> */}
      <Contact />
      <Navbar />
      {/* </ScrollSpy> */}
    </>
  );
}

export default App;
