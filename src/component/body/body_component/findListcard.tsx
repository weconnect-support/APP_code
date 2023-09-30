import React from "react";
import Card from "./findListcardstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function ListCard() {
  return (
    <Card>
      <ul>
        <li id="date">2023.11.19 - 2023.11.20</li>
        <li id="title">asdf</li>
        <li id="category">카테고리 . 서울 강서구</li>
        <li id="explain">
          설명에 관한 내용이 들어갑니다. 오호홍홍 무야호오오오
        </li>
        <li id="peopleNum">2/5 모집 중</li>
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
      <div className="thumbNail"></div>
    </Card>
  );
}

export default ListCard;
