import ListCard from "../body_component/findListcard";
import Body_List from "./wishListBody_style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function WishList_Body() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  useEffect(() => {
    getVolunteerInfo();
  }, []);
  const getVolunteerInfo = async () => {
    let data = await axios({
      method: "GET",
      url: "https://api-dev.weconnect.support/volunteer/wishlist",
      headers: {
        Authorization: localStorage.getItem("jwt-token"),
      },
    });
    console.log(data.data.data.wishlist);
    setList(data.data.data.wishlist);
  };
  return (
    <Body_List>
      {list.map((item, index) => (
        <ListCard data={item} />
      ))}
    </Body_List>
  );
}

export default WishList_Body;
