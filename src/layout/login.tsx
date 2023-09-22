import Header from "../component/header/header";
import Footer from "./../component/footer/footer";
import Login_Body from "./../component/body/loginbody";

function Login() {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        padding: "0",
      }}
    >
      <Header />
      <Login_Body />
      <Footer />
    </div>
  );
}

export default Login;
