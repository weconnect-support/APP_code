import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function RedirectNaver() {
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const platform = 3;
    if (window.location.href.includes("access_token")) {
      const token = window.location.href.split("=")[1].split("&")[0];
      console.log("naver: " + token);
      let token_data = await axios({
        url: "https://ss-dev.noe.systems/users/login",
        method: "POST",
        data: {
          access_token: token,
          platform, // 1 google, 2 kakao, 3 naver
        },
      });
      //token 없을 때 회원 가입 넘어가는 부분
      if (token_data.data.text === "login fail") {
        console.log("hi");
        navigate("../signup", { state: { platform, token } });
      }
      //로그인 진행
      else {
        console.log(token_data.data);
        await localStorage.setItem("jwt-token", token_data.data.token);

        let user_data = await axios({
          url: "https://api-dev.weconnect.support/users",
          method: "GET",
          headers: { authorization: token_data.data.token },
        });
        await localStorage.setItem("user-idx", user_data.data.userInfo.idx);

        navigate("/");
      }
    }
  };

  return <div></div>;
}

export default RedirectNaver;
