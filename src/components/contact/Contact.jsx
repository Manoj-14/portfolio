import {
  FaAddressCard,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ContactForm from "./contact-form/ContactForm";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact-form" id="contact">
      <div className="contact-info">
        <h2>Contact Me</h2>
        <div className="contact-items">
          <ul>
            <li>
              <a href="tel:+9741626527">
                <FaPhoneAlt className="icons contact-icon" />
                9741626527
              </a>
            </li>
            <li>
              <a href="mailto:manojmanjunath1425+portfolio@gmail.com">
                <IoMdMail className="icons contact-icon" />{" "}
                manojmanjunath1425@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/gsCkkJMkUGQd2eXRA"
                target="_blank"
                rel="noreferrer"
              >
                <FaAddressCard className="icons contact-icon" />
                24, Marathahalli - Sarjapur Outer Ring Rd, Bellandur, Bellandur
                Amanikere, Bengaluru, Karnataka 560103
              </a>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/manojm1425"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="icons" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/manojm_14/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="icons" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Manoj-14"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="icons" />
              </a>
            </li>
          </ul>
        </div>
        <div className="dots" id="first-child"></div>
        <div className="dots"></div>
      </div>
      <div>
        <ContactForm />
      </div>
    </section>
  );
}
