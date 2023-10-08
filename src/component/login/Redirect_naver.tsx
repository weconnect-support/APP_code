import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
function RedirectNaver() {
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    if (window.location.href.includes("access_token")) {
      const token = window.location.href.split("=")[1].split("&")[0];
      console.log("naver: " + token);
      let token_data = await axios({
        url: "https://ss-dev.noe.systems/users/login",
        method: "POST",
        data: {
          access_token: token,
          platform: 3, // 1 google, 2 kakao, 3 naver
        },
      });
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
  };

  return <div></div>;
}

export default RedirectNaver;
