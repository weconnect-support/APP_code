import { Body_Main } from "./body_style";
import MessageCard from "./body_component/messagecard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
function Body() {
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
    </Body_Main>
  );
}

export default Body;
