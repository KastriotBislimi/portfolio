import "./footer.css";

function Footer() {
  return (
    <footer id="footer">
      <ul className="permalinks">
        <li>
          <a href="#"></a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>&copy;2022</small>
      </div>
    </footer>
  );
}

export default Footer;
