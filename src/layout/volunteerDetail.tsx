import Footer from "../component/footer/footer";
import { useParams } from "react-router";
import Volunteer_Detail from "../component/body/volunteerDetail/volunteerDetail";

import DetailFooter from "./../component/footer/detailFooter";

function VolDetail() {
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
      <Volunteer_Detail idx={params.idx} />
      <DetailFooter />
    </div>
  );
}

export default VolDetail;
