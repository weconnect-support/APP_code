import React, { useState, useEffect } from "react";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";

export default function KakaoLogin_Button() {
  const CLIENT_ID = "eb14cc7280926662ac5976efbbe3943a";
  const REDIRECT_URI = "http://localhost:3000/kakao";
  const kakaourl = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaourl;
  };
  return (
    <>
      <img
        id="loginNaverBtn"
        onClick={handleLogin}
        alt="navericon"
        src="icon/kakao.png"
        style={{ height: "5rem", margin: "0 1rem 0 1rem" }}
      ></img>
    </>
  );
}
