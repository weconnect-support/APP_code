import React, { useState, useEffect } from "react";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";

export default function KakaoLogin_Button() {
  const navigate = useNavigate();
  const CLIENT_ID = "eb14cc7280926662ac5976efbbe3943a";
  const REDIRECT_URI = "http://localhost:3000/kakao";
  const kakaourl = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaourl;
  };
  return (
    <>
      <button onClick={handleLogin} style={{ margin: "200px" }}>
        카카오 로그인
      </button>
    </>
  );
}
