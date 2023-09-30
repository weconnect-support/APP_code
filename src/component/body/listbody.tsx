import React from "react";
import ListCard from "./body_component/findListcard";
import Body_List from "./listbody_Style";

function List_Body() {
  return (
    <Body_List>
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
