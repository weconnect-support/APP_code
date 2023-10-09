import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router";
import axios from "axios";
const GoogleLogin_Button = (props: any) => {
  const navigate = useNavigate();

  const CLIENT_ID =
    "208274782312-lp3t7sngnggdci5lm1m2ph8g0vuamvkc.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
      gapi.client.init({
        CLIENT_ID,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const LoginSuccess = async (res: any) => {
    const platform = 1;
    const token = res.accessToken;
    console.log("google: " + res.accessToken);
    let token_data = await axios({
      url: "https://ss-dev.noe.systems/users/login",
      method: "POST",
      data: {
        access_token: res.accessToken,
        platform: 1, // 1 google, 2 kakao, 3 naver
      },
    });

    if(token_data.data.text=="login fail"){
      console.log('hi');
      navigate('../signup', {state: {platform, token}});
    }        
    else{
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
  const LoginFailure = (res: any) => {
    console.log(res);
  };
  return (
    <>
      <GoogleLogin
        clientId={CLIENT_ID}
        render={(renderProps) => (
          <img
            onClick={renderProps.onClick}
            alt="googleicon"
            src="icon/google.png"
            style={{ height: "5rem", margin: "0 1rem 0 1rem" }}
          ></img>
        )}
        buttonText="Google"
        onSuccess={LoginSuccess}
        onFailure={LoginFailure}
      />
    </>
  );
};
export default GoogleLogin_Button;
