import "./about.css";
import Me from "../../assets/me2.jpg";
import { FaAward } from "react-icons/fa";
import { TbFolders } from "react-icons/tb";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6 months</small>
            </article>

            <article className="about__card">
              <TbFolders className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>
          <p>
            I'm a Junior Front End Developer with a knack for JS and and a
            hidden love for Back End. Ever since my early childhood, I've been a
            gamer and a tech junkie by heart. So, me being a programmer isn't a
            coincidence. It's the result of letting my love for tech shape me.
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
