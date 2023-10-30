// commentCard.tsx
import { PropTypes } from "@mui/material";
import { comment } from "../volunteerDetail";
import Card from "./commentCardstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

interface CommentCardProps {
  comment: comment;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <Card>
      <div id="comment">{comment.comment}</div>
      <div className="user">
        <FontAwesomeIcon id="thumnail" icon={faCircleUser}></FontAwesomeIcon>
        <div id="userName">{comment.name} </div>
      </div>
      <div id="createDate">2023.10.30</div>
    </Card>
  );
};

export default CommentCard;
