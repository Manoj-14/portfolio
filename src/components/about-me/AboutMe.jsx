import "./aboutMe.css";

export default function AboutMe() {
  return (
    <section id="about-me-section">
      <div>
        <div>
          <p className="heading-p">
            <span className="line-span"></span>About Me
          </p>
          <h4>My goal is to work in a challenging and dynamic environment,</h4>
          <h4>consistently adding value to the organizations I represent.</h4>
        </div>
        <div id="contact-div">
          <h2>Think.. Make..</h2>
          <h2>Solve..</h2>
          <button className="button contact-btn">Contact</button>
        </div>
      </div>
    </section>
  );
}
