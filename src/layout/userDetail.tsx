import MainHeader from "../component/header/mainHeader";
import Footer from "./../component/footer/footer";
import Detail_Body from "./../component/body/userDetailbody";
import { useParams } from "react-router";

function UserDetail() {
  const params = useParams();

  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        padding: "0",
      }}
    >
      <MainHeader />
      <Detail_Body />
      <Footer />
    </div>
  );
}

export default UserDetail;
