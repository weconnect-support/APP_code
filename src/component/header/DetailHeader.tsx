import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBell,
  faEllipsis,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import DetailHeaderBox from "./detailHeaderStyle";

function DetailHeader() {
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
    <DetailHeaderBox isVisible={usertoggled} windowWidth={windowWidth}>
      {/*왼쪽 메뉴바*/}
      <FontAwesomeIcon
        onClick={goBack}
        className="backBtn"
        icon={faArrowLeft}
      />
      <FontAwesomeIcon
        className="extra"
        onClick={gologin}
        icon={faEllipsis}
      ></FontAwesomeIcon>
    </DetailHeaderBox>
  );
}

export default DetailHeader;
