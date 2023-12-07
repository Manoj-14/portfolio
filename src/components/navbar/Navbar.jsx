import NavItem from "./navItem/NavItem";
import { useState } from "react";
import "./navbar.css";
import { BrowserRouter } from "react-router-dom";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("intro");

  function handleActiveSection(section) {
    setActiveSection(() => section);
    console.log(activeSection);
  }
  return (
    <nav className="navbar">
      <BrowserRouter>
        <ul>
          <NavItem
            title="Intro"
            activeLink={() => handleActiveSection("intro")}
            isActive={activeSection === "intro"}
            activeSec="hero-section"
          />
          <NavItem
            title="About Me"
            activeLink={() => handleActiveSection("about-me")}
            isActive={activeSection === "about-me"}
            activeSec="about-me-section"
          />
          <NavItem
            title="Projects"
            activeLink={() => handleActiveSection("project")}
            isActive={activeSection === "project"}
            activeSec="project"
          />
          <NavItem
            title="Contact"
            activeLink={() => handleActiveSection("contact")}
            isActive={activeSection === "contact"}
            activeSec="contact"
          />
        </ul>
      </BrowserRouter>
    </nav>
  );
}
