import { Link, Route, Routes } from "react-router-dom";


import NaverLogin_Button from "../login/naverLogin";
import KakaoLogin_Button from "../login/kakaoLogin";
import GoogleLogin_Button from "../login/googleLogin";
import NormalLogin from "../login/normalLogin";

function Login_Body() {

  return (
    
    <div className="loginPage">
      <NormalLogin />
      <div className="socialLogin">
        <div className = "naverLogin">
          <Link to="/naver">
          <NaverLogin_Button />
          </Link>
        </div>
        <div className = "kakaoLogin">
          <Link to="/kakao">
            <KakaoLogin_Button />
          </Link> 
        </div>
        <div>
          <Link to ="/google">
            <GoogleLogin_Button />
          </Link>  
        </div>
      </div> 
    </div>

  );
}

export default Login_Body;
