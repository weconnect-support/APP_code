import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectKakao() {
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log("kakao: " + code);
    navigate("/");
  };
  return <div></div>;
}

export default RedirectKakao;
