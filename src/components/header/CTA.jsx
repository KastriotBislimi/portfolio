import Cv from "../../assets/KB.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Cv} download="KB.pdf" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
