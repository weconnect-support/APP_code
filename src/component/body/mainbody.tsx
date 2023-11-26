import { Body_Main } from "./mainbody_style";
import MessageCard from "./body_component/findcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import FindLocationCard from "./body_component/locationcard";
import { Link, Route, Routes } from "react-router-dom";
import { HeartFilled } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

function Main_Body() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  useEffect(() => {
    getVolunteerInfo();
    checkToken();
  }, []);

  const checkToken = () => {
    const token = localStorage.getItem("jwt-token");
    if (token) {
      const temp = JSON.parse(atob(token.split(".")[1]));
      const expire = new Date(temp.expire);
      const now = new Date();
      console.log(now);
      if (expire < now) {
        localStorage.removeItem("jwt-token");
        localStorage.removeItem("user-idx");
      }
    }
  };
  const getVolunteerInfo = async () => {
    let data = await axios({
      method: "GET",
      url: "https://api-dev.weconnect.support/volunteer",
      headers: {
        Authorization: localStorage.getItem("jwt-token"),
      },
    });
    console.log(data.data);
    if (data.data.code === 0) {
      return;
    }
    setList(data.data.data.slice(0, 10));
  };

  return (
    <Body_Main>
      <div
        style={{
          display: "flex",
          justifyContent: "spaceBetween",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{ width: "70%" }}>
          <h2>안녕하세요, 홍길동님</h2>
          <h2> 오늘도 따듯한 하루가 되세요</h2>
        </div>
        <Button
          icon={<HeartFilled style={{color:"#ff4471"}} />}
          onClick={() => navigate("/volunteer/wishList")}
        >
          찜목록
        </Button>
      </div>
      <br />
      <div className="findPeople">
        <div>봉사자를 찾습니다.</div>
        <Link to="/List" style={{ textDecoration: "none" }}>
          <p style={{ paddingRight: "1rem" }}>전체보기 +</p>
        </Link>
      </div>
      <div className="findCardList">
        {list.map((item, index) => (
          <MessageCard data={item} type="volunteer" />
        ))}
      </div>

      <div className="findvolunteer">
        <div>봉사활동을 찾습니다.</div>
        <Link to="/List" style={{ textDecoration: "none" }}>
          <p style={{ paddingRight: "1rem" }}>전체보기 +</p>
        </Link>
      </div>
      <div className="findCardList">
        {list.map((item, index) => (
          <MessageCard data={item} type="customer" />
        ))}
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
        <Link to="/List" style={{ textDecoration: "none" }}>
          <p>전체보기 +</p>
        </Link>
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
