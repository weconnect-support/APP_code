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

function MainHeader() {
  const [usertoggled, setUserToggled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const userClick = () => {
    setUserToggled(!usertoggled);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();
  const gohome = () => {
    navigate("/");
  };
  const gologin = () => {
    navigate("/login");
  };

  return (
    <Header_box isVisible={usertoggled} windowWidth={windowWidth}>
      {/*왼쪽 메뉴바*/}
      <div className="loGo" onClick={gohome}>
        SSang
      </div>
      {/*user 버튼*/}
      <div className="userIcon" onClick={userClick}>
        <FontAwesomeIcon className="alarmBell" icon={faBell}></FontAwesomeIcon>
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
