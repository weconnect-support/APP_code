import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router";

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

  const LoginSuccess = (res: any) => {
    console.log("google: " + res.accessToken);
    navigate("/");
  };
  const LoginFailure = (res: any) => {
    console.log(res);
  };
  return (
    <>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Google"
        onSuccess={LoginSuccess}
        onFailure={LoginFailure}
      />
    </>
  );
};
export default GoogleLogin_Button;
