import MainHeader from "../component/header/mainHeader";
import Footer from "./../component/footer/footer";
import NormalLogin from "./../component/login/normalLogin";

function Login() {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        padding: "0",
        height: "100vh",
      }}
    >
      <MainHeader />
      <NormalLogin />
      <Footer />
    </div>
  );
}

export default Login;