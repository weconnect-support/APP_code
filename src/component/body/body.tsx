import { Body_Main } from "./body_style";
import MessageCard from "./body_component/messagecard";

function Body() {
  return (
    <Body_Main>
      <p>안녕하세요, 홍길동님</p>
      <p> 오늘도 따듯한 하루가 되세요</p>
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
        <MessageCard />
        <MessageCard />
      </div>
    </Body_Main>
  );
}

export default Body;
