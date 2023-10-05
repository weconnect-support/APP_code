import { Body_Login } from "./loginbody_style";
import { Link, Route, Routes } from "react-router-dom";

import NaverLogin_Button from "../login/naverLogin";
import KakaoLogin_Button from "../login/kakaoLogin";
import GoogleLogin_Button from "../login/googleLogin";
import { useState } from "react";

interface FormProps {
  onSubmit: (data: FormData) => void;
}
interface FormData {
  email: string;
  password: string;
}
function NormalLogin() {
  const [values, setValues] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(values, null, 2));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
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
