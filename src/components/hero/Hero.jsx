/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";
import "./hero.css";
import Header from "../header/Header.jsx";
import { useEffect, useRef } from "react";
import { TweenMax } from "gsap/gsap-core.js";
import { Power3 } from "gsap";
import UsrImage from "../../assets/demo-img.jpg";

export default function Hero() {
  let horBarOne = useRef(null);
  let horBarTwo = useRef(null);
  let horBarThree = useRef(null);
  let horBarFour = useRef(null);
  let verBarOne = useRef(null);
  let verBarTwo = useRef(null);
  let verBarThree = useRef(null);
  let verBarFour = useRef(null);
  useEffect(() => {
    TweenMax.staggerFrom(
      [
        horBarOne,
        horBarTwo,
        horBarThree,
        horBarFour,
        verBarOne,
        verBarTwo,
        verBarThree,
        verBarFour,
      ],
      2,
      {
        opacity: 0,
        y: -500,
        ease: Power3.easeOut,
      }
    );
    TweenMax.staggerTo(
      [
        horBarOne,
        horBarTwo,
        horBarThree,
        horBarFour,
        verBarOne,
        verBarTwo,
        verBarThree,
        verBarFour,
      ],
      2,
      {
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
      }
    );
  });

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
        <div className="vertical-bar">
          <div
            className="bar-div"
            ref={(bar) => (verBarOne = bar)}
            id="bar-div-one"
          ></div>
          <div
            className="bar-div"
            ref={(bar) => (verBarTwo = bar)}
            id="bar-div-two"
          ></div>
          <div
            className="bar-div"
            ref={(bar) => (verBarThree = bar)}
            id="bar-div-three"
          ></div>
          <div
            className="bar-div"
            ref={(bar) => (verBarFour = bar)}
            id="bar-div-four"
          ></div>
        </div>
        <div id="hero-image">
          <img src={UsrImage} alt="User Image" />
        </div>
        <div className="horizontal-bar">
          <div
            className="bar-div"
            ref={(bar) => (horBarOne = bar)}
            id="bar-div-one"
          ></div>
          <div
            className="bar-div"
            ref={(bar) => (horBarTwo = bar)}
            id="bar-div-two"
          ></div>
          <div
            className="bar-div"
            ref={(bar) => (horBarThree = bar)}
            id="bar-div-three"
          ></div>
          <div
            className="bar-div"
            ref={(bar) => (horBarFour = bar)}
            id="bar-div-four"
          ></div>
        </div>
      </div>
    </section>
  );
}
