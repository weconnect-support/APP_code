import { Body_Login } from "./loginbody_style";
import { Link, useNavigate } from "react-router-dom";
import NaverLogin_Button from "../login/naverLogin";
import KakaoLogin_Button from "../login/kakaoLogin";
import GoogleLogin_Button from "../login/googleLogin";
import { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";

interface FormData {
  email: string;
  password: string;
}
function NormalLogin() {
  const navigation = useNavigate();
  const [values, setValues] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    let token_data = await axios({
      url: "https://ss-dev.noe.systems/users/login",
      method: "POST",
      data: {
        email: values.email,
        password: values.password,
        platform: 4, //4 email
      },
    });
    await localStorage.setItem("jwt-token", token_data.data.token);
    if (localStorage.getItem("jwt-token") === "undefined") {
      console.log("no token");
    } else {
      let user_data = await axios({
        url: "https://api-dev.weconnect.support/users",
        method: "GET",
        headers: { authorization: token_data.data.token },
      });
      await localStorage.setItem("user-idx", user_data.data.userInfo.idx);
    }
    navigation("/");
    //console.log("Token: " +token_data.data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const goToSignup = async () => {
    const platform = 4
    navigation("/signup", {state:{platform}});
  };

  return (
    <Body_Login>
      <div className="page">
        <div className="titleWrap">
          이메일과 비밀번호를 <br></br>
          입력해주세요
        </div>

        <form className="contentWrap" onSubmit={handleSubmit}>
          <div className="inputTitle">이메일 주소</div>
          <div className="inputWrap">
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div style={{ marginTop: "26px" }} className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              name="password"
              value={values.password}
              type="password"
              onChange={handleChange}
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            />
          </div>
          <button
            type="submit"
            style={{ marginTop: "26px" }}
            className="bottomButton"
          >
            확인
          </button>
        </form>
      </div>
      <div className="signupContainer">
        <div className="line"></div>
          <button className="goToSignup" onClick={goToSignup}>
            이메일로 회원가입
          </button>
        <div className="line"></div>
      </div>
      <div className="socialLogin">
        <div className="naverLogin">
          <Link to="/naver">
            <NaverLogin_Button />
          </Link>
        </div>
        <div>
          <Link to="/google">
            <GoogleLogin_Button />
          </Link>
        </div>
        <div className="kakaoLogin">
          <Link to="/kakao">
            <KakaoLogin_Button />
          </Link>
        </div>
      </div>
    </Body_Login>
  );
}

export default NormalLogin;
