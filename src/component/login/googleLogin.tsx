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
    console.log("google: " + res.accessToken);
    let data = await axios({
      url: "https://ss-dev.noe.systems/users/login",
      method: "POST",
      data: {
        access_token: res.accessToken,
        platform: 1, // 1 google, 2 kakao, 3 naver
      },
    });
    console.log(data.data);
    navigate("/");
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
