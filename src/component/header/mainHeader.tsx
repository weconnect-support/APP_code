import React, { useState, useEffect } from "react";
import Header_box from "./mainHeaderStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMagnifyingGlass,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MainHeader() {
  const [usertoggled, setUserToggled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isJwt, setIsJwt] = useState(false);
  const [isIdx, setIsIdx] = useState(false);
  const [userIdx, setIdx] = useState("");

  const navigate = useNavigate();

  const userClick = () => {
    setUserToggled(!usertoggled);
  };

  useEffect(() => {
    checkJWt();
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const gohome = () => {
    navigate("/");
  };
  const gologin = () => {
    if (isIdx && isJwt) {
      navigate(`/detail/${userIdx}`);
    } else {
      navigate("/login");
    }
  };

  const logout = async () => {
    await localStorage.removeItem("jwt-token");
    setIsJwt(false);
    console.log("complete");
  };

  const checkJWt = async () => {
    const jwtToken = localStorage.getItem("jwt-token");
    if (jwtToken === null) {
      console.log("no token!");
    } else {
      setIsJwt(true);
      console.log(jwtToken);

      let data = await axios({
        url: "https://api-dev.weconnect.support/users",
        method: "GET",
        headers: { authorization: jwtToken },
      });
      console.log(data.data);
      setIdx(data.data.userInfo.idx);
      setIsIdx(true);
    }
  };

  return (
    <Header_box isVisible={usertoggled} windowWidth={windowWidth}>
      {/*왼쪽 메뉴바*/}
      <div className="loGo" onClick={gohome}>
        SSang
      </div>
      {/*user 버튼*/}
      <div className="userIcon" onClick={userClick}>
        <FontAwesomeIcon
          className="alarmBell"
          icon={faBell}
          onClick={logout}
          style={{ cursor: "pointer" }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="user"
          icon={faUser}
          onClick={gologin}
        ></FontAwesomeIcon>
      </div>
    </Header_box>
  );
}

export default MainHeader;

/*<ul className="headerMenuList">
<li id="login_text">
  <a href="/login">로그인</a>{" "}
</li>
<li>회원가입</li>
</ul> 

사용자 아이콘 누르면 로그인, 회원가입 나오는건데 지금 굳이 필요한가 싶어서 빼놓음
*/

/* <div className="inputBar">
          <input id="input" />
          <FontAwesomeIcon
            className="searchIcon"
            icon={faMagnifyingGlass}
          ></FontAwesomeIcon>
        </div>
  
  검색 바임 지금은 안써서 옮겨놓음
        */
