import MainHeader from "../component/header/mainHeader";
import Footer from "./../component/footer/footer";
import Register_Body from "../component/body/register/registerBody";
import { useParams } from "react-router";
function Register() {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        padding: "0",
      }}
    >
      <MainHeader />
      <Register_Body/>
      <Footer />
    </div>
  );
}

export default Register;
