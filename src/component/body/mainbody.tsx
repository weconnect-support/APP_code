import { Body_Main } from "./mainbody_style";
import MessageCard from "./body_component/findcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import FindLocationCard from "./body_component/locationcard";
import { Link, Route, Routes } from "react-router-dom";

function Main_Body() {
  return (
    <Body_Main>
      <div>
        <h2>안녕하세요, 홍길동님</h2>
        <h2> 오늘도 따듯한 하루가 되세요</h2>
      </div>
      <br />
      <div className="findPeople">
        <div>봉사자를 찾습니다.</div>
        <div>전체보기 +</div>
      </div>
      <div className="findCardList">
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </div>
      <div className="searchCategory">
        <div id="categoryImg"></div>
        <div>
          <h3>카테고리로 찾기</h3>
          <p>
            찾고계신 봉사활동을 <br />
            카테고리로 빠르게 찾아보세요!
          </p>
        </div>
        <FontAwesomeIcon
          style={{
            color: "#6E6E6E",
            fontSize: "2.5rem",
          }}
          icon={faCircleArrowRight}
        ></FontAwesomeIcon>
      </div>
      <div className="findLocationList">
        <div>
          <p>위치 기발 봉사활동 찾기</p>
          <div className="currentLocation">
            <p>현재위치</p>
            <p>강서구 화곡동</p>
          </div>
        </div>
        <p>전체보기 +</p>
      </div>
      <div className="findLocationList">
        <FindLocationCard />
        <FindLocationCard />
        <FindLocationCard />
        <FindLocationCard />
        <FindLocationCard />
      </div>
      <div className="findOtherLocation">
        <FontAwesomeIcon
          style={{
            color: "#6E6E6E",
            fontSize: "2rem",
          }}
          icon={faSearch}
        ></FontAwesomeIcon>{" "}
        <p>타 지역 봉사활동 찾기</p>
      </div>
    </Body_Main>
  );
}

export default Main_Body;
