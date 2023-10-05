import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function RedirectKakao() {
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log("kakao: " + code);
    let data = await axios({
      url: "https://ss-dev.noe.systems/users/login",
      method: "POST",
      data: {
        access_token: code,
        platform: 2, // 1 google, 2 kakao, 3 naver
      },
    });
    console.log(data.data);
    //navigate("/");
  };
  return <div></div>;
}

export default RedirectKakao;
