import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faLinkedin , faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import the specific icon
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons
import './footer.css';

function Footer() {
  return (
    <footer>
      <FontAwesomeIcon icon={faGithub} style={{color: "#d79922",}} />
      <FontAwesomeIcon icon={faLinkedin} style={{color: "#d79922",}} />
      <FontAwesomeIcon icon={faEnvelope} style={{color: "#d79922",}} />
      <FontAwesomeIcon icon={faInstagram} style={{color: "#d79922",}} />
    </footer>
  );
}

export default Footer;