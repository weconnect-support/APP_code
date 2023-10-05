import MainHeader from "../component/header/mainHeader";
import Footer from "./../component/footer/footer";
import Signup_Body from "../component/body/signupbody";

function Signup() {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        padding: "0",
      }}
    >
      <MainHeader />
      <Signup_Body />
      <Footer />
    </div>
  );
}

export default Signup;
