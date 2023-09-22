import React, { useState, useEffect } from "react";
import Header_box from "./header_style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMagnifyingGlass,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
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
  return (
    <Header_box isVisible={usertoggled} windowWidth={windowWidth}>
      {/*왼쪽 메뉴바*/}
      <div className="loGo">
        SSang
        <div className="inputBar">
          <input id="input" />
          <FontAwesomeIcon
            className="searchIcon"
            icon={faMagnifyingGlass}
          ></FontAwesomeIcon>
        </div>
      </div>
      {/*user 버튼*/}
      <div className="userIcon" onClick={userClick}>
        <FontAwesomeIcon className="alarmBell" icon={faBell}></FontAwesomeIcon>
        <FontAwesomeIcon
          className="user"
          icon={!usertoggled ? faUser : faTimes}
        ></FontAwesomeIcon>
      </div>
      {/*메뉴 리스트*/}
      <ul className="headerMenuList">
        <li id="login_text">
          <a href="/login">로그인</a>{" "}
        </li>
        <li>회원가입</li>
      </ul>
    </Header_box>
  );
}

export default Header;
