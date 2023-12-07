/* eslint-disable react/prop-types */

import "./navItem.css";
import { HashLink as Link } from "react-router-hash-link";

export default function NavItem({ title, isActive, activeLink, activeSec }) {
  return (
    <li className="navItem">
      <Link
        to={`#${activeSec}`}
        smooth
        onClick={activeLink}
        className={isActive ? "navItem-active" : ""}
        // data-to-scrollspy-id={activeSec}
      >
        {title}
      </Link>
    </li>
  );
}
