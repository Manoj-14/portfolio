import "./header.css";
import logo from "../../../public/vite.svg";

export default function Header() {
  return (
    <header>
      <div id="logo">
        <img src={logo} alt="logo" />
      </div>
      <div id="links">
        <ul>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">GitHub</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
