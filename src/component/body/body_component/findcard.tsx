import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Card from "./findcardstyle";

function MessageCard() {
  return (
    <div>
      <Card>
        <ul>
          <li id="date">2023.11.19 - 2023.11.20</li>
          <li id="title">모집관련 타이틀 입니다</li>
          <li id="category">카테고리 . 서울 강서구</li>
          <li id="peopleNum">2/5 모집 중</li>
          <div id="iconList">
            <FontAwesomeIcon
              icon={faCircleUser}
              className="icon"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faCircleUser}
              className="icon"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faCircleUser}
              className="icon"
            ></FontAwesomeIcon>
          </div>
        </ul>
        <div className="thumbNail"></div>
      </Card>
    </div>
  );
}

export default MessageCard;
