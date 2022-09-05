import "./portfolio.css";
import PortfolioDetails from "./PortfolioDetails";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <PortfolioDetails
          title="My Portfolio"
          libraries={["react-js", "mail-js", "react-toastify", "react-icons"]}
          details="The current website you are visiting. Made without a CSS library such as bootstrap, fully responsive and ineractive. The contact form was made using MailJS."
          link="https://github.com/KastriotBislimi/portfolio"
        />
        <PortfolioDetails
          title="Ai Project"
          libraries={["react-js"]}
          details="A static website built to purely challenge my responsive webdesign skills with a color pattern prefering gradients."
          link="https://github.com/KastriotBislimi/AiProject"
          liveLink="https://preeminent-frangipane-ca8887.netlify.app/"
        />
        <PortfolioDetails
          title="Youtube Clone"
          libraries={["react-js", "material ui", "axios"]}
          details="I cloned Youtube by utilizing axios,MUI and ReactPlayer. This challenged and honed my ReactJS skillset."
          link="https://github.com/KastriotBislimi/cloneyoutube"
          liveLink="https://delicate-naiad-51850a.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Portfolio;
