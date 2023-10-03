import React from "react";
import MainHeader from "../component/header/mainHeader";
import Main_Body from "../component/body/mainbody";

import styled from "styled-components";
import Footer from "../component/footer/footer";

function Main() {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        padding: "0",
      }}
    >
      <MainHeader />
      <Main_Body />
      <Footer />
    </div>
  );
}
export default Main;
