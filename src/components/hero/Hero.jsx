/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";
import "./hero.css";
import Header from "../header/Header.jsx";
import { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap/gsap-core.js";
import { gsap, CSSPlugin } from "gsap/all";
gsap.registerPlugin(CSSPlugin);

export default function Hero() {
  // console.log("Hero");
  let heroImage = useRef(null);
  useEffect(() => {
    TweenMax.from(heroImage, 1, {
      opacity: 1,
      y: -800,
      ease: Power3.easeInOut,
      delay: 0,
    });
    TweenMax.to(heroImage, 3, {
      opacity: 1,
      y: 0,
      ease: Power3.easeInOut,
    });
  }, []);

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
      <div id="hero-image-div" ref={(el) => (heroImage = el)}>
        {/* <img src={HeroImage} id="hero-image" alt="Hero image" /> */}
      </div>
    </section>
  );
}
