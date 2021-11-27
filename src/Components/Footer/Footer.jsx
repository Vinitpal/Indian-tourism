import "./footer.style.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Designed By</h1>
      <div className="links">
        <a href="https://dribbble.com/jay_1308">Jay</a>
        <a href="https://dribbble.com/Doodle1210">Priyansh</a>
      </div>
      <h1>Made with &#10084; by Vinit</h1>
      <div className="links">
        <a href="https://www.linkedin.com/in/vinitpal-singh-0718a3191/">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://twitter.com/vinitpal_arora">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://github.com/Vinitpal">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/vinitpal_arora/">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
