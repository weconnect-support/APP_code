import Navigation from "./footer_style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalendar,
  faHouse,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import Participate from "./detailFooterStyle";

function DetailFooter() {
  return (
    <Participate>
      <FontAwesomeIcon id="icon" icon={faCalendar}></FontAwesomeIcon>
    </Participate>
  );
}

export default DetailFooter;
