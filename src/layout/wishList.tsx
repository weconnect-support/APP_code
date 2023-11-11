import React from "react";
import Footer from "../component/footer/footer";
import WishListHeader from "../component/header/wishListHeader";
import WishList_Body from "../component/body/wishListBody/wishListBody";

function WishList() {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        padding: "0",
      }}
    >
      <WishListHeader />
      <WishList_Body/>
      <Footer />
    </div>
  );
}
export default WishList;
