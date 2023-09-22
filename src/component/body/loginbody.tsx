import { Link, Route, Routes } from "react-router-dom";

import NaverLogin_Button from "../login/naverLogin";
import KakaoLogin_Button from "../login/kakaoLogin";
import GoogleLogin_Button from "../login/googleLogin";

function Login_Body() {
  return (
    <div>
      <Link to="/naver">
        <NaverLogin_Button />
      </Link>
      <Link to="/kakao">
        <KakaoLogin_Button />
      </Link>
      <GoogleLogin_Button />
    </div>
  );
}
export default Login_Body;
