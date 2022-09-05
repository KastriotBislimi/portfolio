import "./experience.css";
import { BsPatchCheck } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experince__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experince__details">
              <BsPatchCheck />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experince__details">
              <BsPatchCheck />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experince__details">
              <BsPatchCheck />
              <h4>JavasScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experince__details">
              <BsPatchCheck />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experince__details">
              <BsPatchCheck />
              <h4>Tailwind</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experince__details">
              <BsPatchCheck />
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        <div className="experince__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experince__details">
              <BsPatchCheck />
              <h4>Node js</h4>
              <small className="text-light">Basic</small>
            </article>
            <article className="experince__details">
              <BsPatchCheck />
              <h4>MongoDB</h4>
              <small className="text-light">Basic</small>
            </article>
            <article className="experince__details">
              <BsPatchCheck />
              <h4>PHP</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experince__details">
              <BsPatchCheck />
              <h4>MySql</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
