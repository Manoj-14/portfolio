import NavItem from "./navItem/NavItem";
import { useState } from "react";
import "./navbar.css";
import { BrowserRouter } from "react-router-dom";
import ScrollSpy from "react-scrollspy";

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
          <ScrollSpy
            items={["hero-section", "about-me-section", "project", "contact"]}
            currentClassName="navItem-active"
          >
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
          </ScrollSpy>
        </ul>
      </BrowserRouter>
    </nav>
  );
}
