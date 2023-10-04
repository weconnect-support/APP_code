import { Body_Login } from "./loginbody_style";

function NormalLogin() {
  return (
    <Body_Login>
      <div className="page">
        <div className="titleWrap">
          이메일과 비밀번호를 <br></br>
          입력해주세요
        </div>
        <div className="contentWrap">
          <div className="inputTitle">이메일 주소</div>
          <div className="inputWrap">
            <input className="input" type="email" />
          </div>
          <div style={{ marginTop: "26px" }} className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            />
          </div>
          <button style={{ marginTop: "26px" }} className="bottomButton">
            확인
          </button>
        </div>
      </div>
    </Body_Login>
  );
}

export default NormalLogin;
