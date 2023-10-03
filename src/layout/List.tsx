import React from "react";
import Footer from "../component/footer/footer";
import List_Body from "./../component/body/listbody";
import ListHeader from "../component/header/ListHeader";

function List() {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        padding: "0",
      }}
    >
      <ListHeader />
      <List_Body />
      <Footer />
    </div>
  );
}
export default List;
