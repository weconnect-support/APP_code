import Navigation from "./footer_style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Participate from "./detailFooterStyle";

function DetailFooter() {
  return (
    <Participate>
      <div>
        {" "}
        <FontAwesomeIcon id="icon" icon={faCalendar}></FontAwesomeIcon>
        <span>신청하기</span>
      </div>
    </Participate>
  );
}

export default DetailFooter;
