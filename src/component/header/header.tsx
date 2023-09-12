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
  const [userToggled, setUserToggled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const userClick = () => {
    setUserToggled(!userToggled);
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
    <Header_box userToggled={userToggled} windowWidth={windowWidth}>
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
          icon={!userToggled ? faUser : faTimes}
        ></FontAwesomeIcon>
      </div>
      {/*메뉴 리스트*/}
      <ul className="headerMenuList">
        <li>로그인</li>
        <li>회원가입</li>
      </ul>
    </Header_box>
  );
}

export default Header;
