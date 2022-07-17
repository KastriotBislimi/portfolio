import "./portfolio.css";
import Foto1 from "../../assets/K.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="porfolio__item">
          <div className="portfolio__item-image">
            <img src={Foto1} alt="foto" />
            <h3>Portfolio Item Titile</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.github.com" className="btn">
                Github
              </a>
              <a href="https://www.github.com/1" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="porfolio__item">
          <div className="portfolio__item-image">
            <img src={Foto1} alt="foto" />
            <h3>Portfolio Item Titile</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.github.com" className="btn">
                Github
              </a>
              <a href="https://www.github.com/1" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="porfolio__item">
          <div className="portfolio__item-image">
            <img src={Foto1} alt="foto" />
            <h3>Portfolio Item Titile</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.github.com" className="btn">
                Github
              </a>
              <a href="https://www.github.com/1" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
