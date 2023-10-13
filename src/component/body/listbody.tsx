import React from "react";
import ListCard from "./body_component/findListcard";
import Body_List from "./listbody_Style";
import {useNavigate} from "react-router-dom"

function List_Body() {
  const navigate = useNavigate();
  const goToRegister = () =>{
    console.log("hi");
    navigate("/register");
  }
  return (
    <Body_List>
      <button onClick={() => goToRegister()} 
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
        }}>
        활동 등록하기
      </button>
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
    </Body_List>
  );
}

export default List_Body;
