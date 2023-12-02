import ListCard from "./body_component/findListcard";
import Body_List from "./listbody_Style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function List_Body() {
  const navigate = useNavigate();
  const goToRegister = () => {
    console.log("hi");
    navigate("/register");
  };
  const [list, setList] = useState([]);

  useEffect(() => {
    getVolunteerInfo();
  }, []);
  const getVolunteerInfo = async () => {
    let data = await axios({
      method: "GET",
      url: "https://api-dev.weconnect.support/volunteer",
      headers: {
        Authorization: localStorage.getItem("jwt-token"),
      },
    });
    console.log(data.data.data);
    setList(data.data.data);
  };
  return (
    <Body_List>
      <button
        onClick={() => goToRegister()}
        style={{
          marginTop: "1rem",
          width: "90%",
          height: "3rem",
          border: "none",
          fontWeight: "bold",
          borderRadius: "64px",
          backgroundColor: "#FF4471",
          color: "white",
          cursor: "pointer",
        }}
      >
        활동 등록하기
      </button>
      {list.map((item, index) => (
        <ListCard data={item} />
      ))}
    </Body_List>
  );
}

export default List_Body;
