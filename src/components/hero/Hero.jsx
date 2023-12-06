import ReactTyped from "react-typed";
import "./hero.css";
import Header from "../header/Header";

export default function Hero() {
  return (
    <section id="hero-section">
      <Header />
      <div id="header-div">
        <p>
          <span></span>Manoj M
        </p>
        <h2>Hello, My name is Manoj.</h2>
        <h2>
          I'm a{" "}
          <ReactTyped
            strings={["Full Stack Developer", "Cloud Developer", "Designer"]}
            typeSpeed={100}
            loop
            backSpeed={20}
            cursorChar="|"
            showCursor={true}
            className="type-letter"
          ></ReactTyped>
        </h2>
      </div>
      <div id="hero-image-div">
        {/* <img src={HeroImage} id="hero-image" alt="Hero image" /> */}
      </div>
    </section>
  );
}
