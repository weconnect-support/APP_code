import React from "react";
import Header from "../component/header/header";
import Main_Body from "../component/body/mainbody";

import styled from "styled-components";
import Footer from "../component/footer/footer";

const styledBody = styled.div`
  background-color: #bebbbb;
`;

function Main() {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        padding: "0",
      }}
    >
      <Header />
      <Main_Body />
      <Footer />
    </div>
  );
}
export default Main;
