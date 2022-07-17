import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/me.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Kastriot Bislimi</h2>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <div className="me">
          <img src={Me} alt="Me in person" />
        </div>

        <a href="#contact" className="scroll__arrow">
          <i className="scroll__down"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
