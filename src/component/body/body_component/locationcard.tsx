import Card2 from "./locationcardstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function FindLocationCard() {
  return (
    <Card2>
      <ul>
        <div id="thumb">
          <div id="kilometer">2.8km</div>
        </div>
        <li id="date">2023.11.19 - 2023.11.20</li>
        <li id="title">모집관련 타이틀 입니다</li>
        <li id="category">카테고리 . 서울 강서구</li>
        <li id="peopleNum">2/5 모집 중</li>
        <li id="iconMargin">
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
        </li>
      </ul>
    </Card2>
  );
}

export default FindLocationCard;
