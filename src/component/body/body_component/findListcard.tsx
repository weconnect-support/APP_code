import React from "react";
import Card from "./findListcardstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

interface Data {
  due_date: string;
  title: string;
  category: string;
  location: string;
  current_customer: number;
  current_volunteer: number;
  customer_limit: number;
  volunteer_limit: number;
  img: string;
}

const ListCard = (props: { data: Data }) => {
  const {
    due_date,
    title,
    category,
    location,
    current_customer,
    current_volunteer,
    customer_limit,
    volunteer_limit,
    img
  } = props.data;
  return (
    <Card>
      <ul>
        <li id="date">{due_date.substring(0, due_date.indexOf("T"))}</li>
        <li id="title">{title}</li>
        <li id="category">
          {category} . {location}
        </li>
        {/* <li id="explain">
          설명에 관한 내용이 들어갑니다. 오호홍홍 무야호오오오
        </li> */}
        <li id="peopleNum">
          봉사자 {current_volunteer}/{volunteer_limit}{" "}
          {current_volunteer === volunteer_limit ? "모집완료" : "모집 중"}
        </li>
        <li id="peopleNum">
          수요자 {current_customer}/{customer_limit}{" "}
          {current_customer === customer_limit ? "모집완료" : "모집 중"}
        </li>
        <div id="iconList">
          <FontAwesomeIcon
            icon={faCircleUser}
            className="icon"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faCircleUser}
            className="icon"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faCircleUser}
            className="icon"
          ></FontAwesomeIcon>
        </div>
      </ul>
      <div className="thumbNail" style={{width:"20%", overflow:"hidden"}} >
        <img src={"https://api-dev.weconnect.support/img/"+img} style={{width:"100%", height:"100%", objectFit:"scale-down"}}/>
      </div>
    </Card>
  );
};

export default ListCard;
