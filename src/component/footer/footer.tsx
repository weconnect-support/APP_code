import { useNavigate } from 'react-router-dom'
import Navigation from "./footer_style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalendar,
  faHouse,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const navigate = useNavigate();
  return (
    <Navigation>
      <ul className="navigation">
        <FontAwesomeIcon id="icon" icon={faHouse}></FontAwesomeIcon>
        <FontAwesomeIcon id="icon" icon={faSignal}></FontAwesomeIcon>
        <FontAwesomeIcon id="icon" icon={faCalendar} onClick={()=>navigate('/calendar')}></FontAwesomeIcon>
        <FontAwesomeIcon id="icon" icon={faBars}></FontAwesomeIcon>
      </ul>
    </Navigation>
  );
}

export default Footer;
