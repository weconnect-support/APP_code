import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    naver: any;
  }
}

export default function NaverLogin() {
  useEffect(() => {
    initNaverLogin();
    getData();
  }, []);

  const initNaverLogin = () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: "pbsnA3r3fC8AmYvErUfW",
      callbackUrl: `http://localhost:3000/naver`,
      isPopup: false,
      loginButton: {
        color: "green",
        type: 1,
        height: 1000,
      },
      callbackHandle: true,
    });
    naverLogin.init();
  };

  const getData = () => {
    if (window.location.href.includes("access_token")) {
      const token = window.location.href.split("=")[1].split("&")[0];
      console.log(token);
    }
  };

  return (
    <React.Fragment>
      <div id="naverIdLogin"></div>
    </React.Fragment>
  );
}

/*import React from "react";
function Naver_login() {
  const NAVER_CLIENT_ID = "pbsnA3r3fC8AmYvErUfW";
  const REDIRECT_URI = "http://localhost:3000/naver";
  const STATE = "RANDOM_STATE";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&amp;client_id=${NAVER_CLIENT_ID}&amp;redirect_uri=${REDIRECT_URI}&amp;state=${STATE}`;

  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };
  return (
    <button
      style={{ margin: "1000", height: "300px", width: "300px" }}
      onClick={NaverLogin}
    >
      네이버 로그인
    </button>
  );
}

export default Naver_login;
*/
