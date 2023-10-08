import MainHeader from "../component/header/mainHeader";
import Footer from "./../component/footer/footer";
import Detail_Body from "../component/body/user_detail/userDetailbody";
import { useParams } from "react-router";

function UserDetail() {
  const params = useParams();

  if (!params.idx) {
    return null; // 또는 원하는 다른 처리 방식을 적용할 수 있습니다.
  }

  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        padding: "0",
      }}
    >
      <MainHeader />
      <Detail_Body idx={params.idx} />
      <Footer />
    </div>
  );
}

export default UserDetail;
