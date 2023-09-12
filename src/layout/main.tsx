import React from "react";
import Header from "../component/header/header";
import Body from "./../component/body/body";

import styled from "styled-components";

const styledBody = styled.div`
  background-color: #bebbbb;
`;

function Main() {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
      }}
    >
      <Header />
      <Body />
    </div>
  );
}

export default Main;
