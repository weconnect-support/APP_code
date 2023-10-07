import KakaoLogin from "react-kakao-login";
import axios from "axios";
import { useNavigate } from "react-router";

export default function KakaoLogin_Button() {
  const navation = useNavigate();
  const kakaoCientId = "9506e59c870563dc4a3f4a13121908cb";
  const OnSuccess = async (data: any) => {
    console.log(data);
    const token = data.response.access_token;
    let data_server = await axios({
      url: "https://ss-dev.noe.systems/users/login",
      method: "POST",
      data: {
        access_token: token,
        platform: 2, // 1 google, 2 kakao, 3 naver
      },
    });
    console.log(data_server.data);

    await localStorage.setItem("jwt-token", data_server.data.token);
    navation("/");
  };
  const Onfailure = (err: any) => {
    console.log(err);
  };

  return (
    <>
      <KakaoLogin
        token={kakaoCientId}
        onSuccess={OnSuccess}
        onFail={Onfailure}
        style={{
          border: "none",
          padding: "0",
          margin: "0 1rem 0 1rem",
          cursor: "pointer",
        }}
      >
        <img
          id="loginNaverBtn"
          alt="kakaoicon"
          src="icon/kakao.png"
          style={{ height: "5rem" }}
        ></img>
      </KakaoLogin>
    </>
  );

  /*const CLIENT_ID = "eb14cc7280926662ac5976efbbe3943a";
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
  );*/
}
