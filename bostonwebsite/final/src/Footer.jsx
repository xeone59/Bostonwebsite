import './Footer.css';

function Footer(){
    return (
        <footer className="footer">
 <div className="container">
        <div className="footer__links">
          <a href="https://www.facebook.com/boston/" target="_blank" rel="noopener noreferrer" className="footer__link">
            Facebook
          </a>
          <span className="footer__delimiter">|</span>
          <a href="https://www.instagram.com/boston/" target="_blank" rel="noopener noreferrer" className="footer__link">
            Instagram
          </a>
          <span className="footer__delimiter">|</span>
          <a href="https://twitter.com/CityOfBoston" target="_blank" rel="noopener noreferrer" className="footer__link">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;