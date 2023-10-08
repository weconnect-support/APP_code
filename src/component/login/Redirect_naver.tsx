import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function RedirectNaver() {
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const platform = 3
    if (window.location.href.includes("access_token")) {
      const token = window.location.href.split("=")[1].split("&")[0];
      console.log("naver: " + token);
      let data = await axios({
        url: "https://ss-dev.noe.systems/users/login",
        method: "POST",
        data: {
          access_token: token,
          platform, // 1 google, 2 kakao, 3 naver
        },
      })
      if(data.data.text=="login fail"){
        console.log('hi');
        navigate('../signup', {state: {platform, token}});
      }
      
      else{
        console.log(data.data);
        await localStorage.setItem("jwt-token", data.data.token);
        navigate("/");
      }
    }
  };

  return <div></div>;
}

export default RedirectNaver;
