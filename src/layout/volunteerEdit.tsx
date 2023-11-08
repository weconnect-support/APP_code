import MainHeader from "../component/header/mainHeader";
import Footer from "./../component/footer/footer";
import EditBody from "../component/body/editVolunteer/volunteerEdit";
function VolunteerEdit() {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        padding: "0",
      }}
    >
      <MainHeader />
      <EditBody />
      <Footer />
    </div>
  );
}

export default VolunteerEdit;
