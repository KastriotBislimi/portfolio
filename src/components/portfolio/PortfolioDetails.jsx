import React from "react";
import foto2 from "../../assets/htmlcssjs.png";

function PortfolioDetails(props) {
  const libraries = props.libraries;
  return (
    <article className="porfolio__item">
      <div className="portfolio__item-image">
        <img src={foto2} alt="foto" />
        <h2>{props.title}</h2>

        <h4>Library Used</h4>
        <div className="portfolio__item-info">
          {libraries.map((library) => (
            <p>{library}</p>
          ))}
        </div>
        <p>{props.details}</p>
        <div className="portfolio__item-cta">
          <a
            href={props.link}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </article>
  );
}

export default PortfolioDetails;
