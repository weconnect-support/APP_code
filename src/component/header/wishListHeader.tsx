import React, { useState, useEffect } from "react";
import ListHeaderBox from "./listHeaderStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function WishListHeader() {
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
  const goBack = () => {
    navigate(-1);
  };
  const gologin = () => {
    navigate("/login");
  };

  return (
    <ListHeaderBox isVisible={usertoggled} windowWidth={windowWidth}>
      {/*왼쪽 메뉴바*/}
      <FontAwesomeIcon
        onClick={goBack}
        className="backBtn"
        icon={faArrowLeft}
      />
      <p>💛내 찜 목록💛</p>
      {/*user 버튼*/}
      <div className="userIcon" onClick={userClick}>
        <FontAwesomeIcon className="alarmBell" icon={faBell}></FontAwesomeIcon>
        <FontAwesomeIcon
          className="user"
          onClick={gologin}
          icon={faUser}
        ></FontAwesomeIcon>
      </div>
    </ListHeaderBox>
  );
}

export default WishListHeader;
