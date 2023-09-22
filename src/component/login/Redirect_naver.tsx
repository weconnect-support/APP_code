import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RedirectNaver() {
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    if (window.location.href.includes("access_token")) {
      const token = window.location.href.split("=")[1].split("&")[0];
      console.log("naver: " + token);
      navigate("/");
    }
  };

  return <div></div>;
}

export default RedirectNaver;
