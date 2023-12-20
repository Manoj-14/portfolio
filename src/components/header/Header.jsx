import "./header.css";
import logo from "../../../public/vite.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <div id="logo">
        <img src={logo} alt="logo" />
      </div>
      <div id="links">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/manojm1425"
              target="_blank"
              rel="noreferrer"
              className="icon-parent"
            >
              <FaLinkedin className="icons" />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Manoj-14"
              target="_blank"
              rel="noreferrer"
              className="icon-parent"
            >
              <FaGithub className="icons" />
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
