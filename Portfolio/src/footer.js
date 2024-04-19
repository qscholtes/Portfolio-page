import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faLinkedin , faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import the specific icon
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons
import './footer.css';

function Footer() {
  return (
    <footer>
      <a href="https://github.com/qscholtes" rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={faGithub} style={{color: "#d79922",}} /></a>
      <a href="https://www.linkedin.com/in/quinten-scholtes/" rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={faLinkedin} style={{color: "#d79922",}} /></a>
      <a href="https://www.instagram.com/scholtesq/" rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={faInstagram} style={{color: "#d79922",}} />  </a>
      <a href="mailto:quintenscholtes@hotmail.com">  <FontAwesomeIcon icon={faEnvelope} style={{color: "#d79922",}} /></a>
    </footer>
  );
}

export default Footer;