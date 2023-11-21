import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Card from "./findcardstyle";
import { Navigate, useNavigate } from "react-router";

interface Data {
  due_date: string;
  title: string;
  category: string;
  location: string;
  current_customer: number;
  current_volunteer: number;
  customer_limit: number;
  volunteer_limit: number;
  idx: number;
}

function MessageCard(props: { data: Data; type: string }) {
  const navigate = useNavigate();
  const {
    due_date,
    title,
    category,
    location,
    current_customer,
    current_volunteer,
    customer_limit,
    volunteer_limit,
    idx,
  } = props.data;

  function CheckType() {
    if (props.type === "volunteer") {
      return (
        <>
          {" "}
          {current_volunteer}/{volunteer_limit}{" "}
          {current_volunteer === volunteer_limit ? "모집완료" : "모집중"}
        </>
      );
    }
    if (props.type === "customer") {
      return (
        <>
          {" "}
          {current_customer}/{customer_limit}{" "}
          {current_customer === customer_limit ? "모집완료" : "모집중"}
        </>
      );
    }
    return <></>;
  }

  return (
    <div
      onClick={() => {
        navigate(`/volunteer/${idx}`);
      }}
    >
      <Card>
        <ul>
          <li id="date"> ~ {due_date.substring(0, due_date.indexOf("T"))}</li>
          <li id="title">{title}</li>
          <li id="category">
            {category} . {location}
          </li>
          <li id="peopleNum">
            <CheckType />
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
        <div className="thumbNail"></div>
      </Card>
    </div>
  );
}

export default MessageCard;
