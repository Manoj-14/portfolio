/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";
import "./hero.css";
import Header from "../header/Header.JSX";

export default function Hero() {
  return (
    <section id="hero-section">
      <Header />
      <div id="header-div">
        <p className="heading-p">
          <span className="line-span"></span>Manoj M
        </p>
        <h2>Hello, My name is Manoj.</h2>
        <h2>
          I'm a{" "}
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1000,
              "Cloud Developer",
              1000,
              "Designer",
              1000,
            ]}
            speed={200}
            repeat={Infinity}
            className="type-letter"
          ></TypeAnimation>
        </h2>
      </div>
      <div id="hero-image-div">
        {/* <img src={HeroImage} id="hero-image" alt="Hero image" /> */}
      </div>
    </section>
  );
}
