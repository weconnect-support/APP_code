import { comment } from "../volunteerDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "react-modal";
import { Card } from "./commentCardstyle";
import axios from "axios";

interface CommentCardProps {
  comment: comment;
  idx: string;
}

const CommentCard = ({ comment, idx }: CommentCardProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [editConfirm, setEditConfirm] = useState(false);
  const [clickedIdx, setClickedIdx] = useState(0);

  const DeleteConfirmMessage = () => {
    const deleteComment = async () => {
      let config = {
        method: "DELETE",
        url: `https://api-dev.weconnect.support/volunteer/${idx}/comment/${clickedIdx}`,
        headers: {
          Authorization: localStorage.getItem("jwt-token"),
        },
      };
      const res = await axios(config);
      console.log(res.data);
      window.location.reload();
    };

    const customModalStyles2: ReactModal.Styles = {
      overlay: {
        backgroundColor: " rgba(0, 0, 0, 0.4)",
        width: "100%",
        height: "100vh",
        zIndex: "10",
        position: "fixed",
        top: "0",
        left: "0",
      },
      content: {
        width: "80%",
        height: "15%",
        zIndex: "150",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
        justifyContent: "center",
        overflow: "auto",
      },
    };

    return (
      <Modal
        isOpen={deleteConfirm}
        onRequestClose={() => setDeleteConfirm(false)}
        ariaHideApp={false}
        style={customModalStyles2}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            fontSize: "1.3rem",
            height: "100%",
          }}
        >
          <p
            style={{
              margin: "0 auto",
            }}
          >
            {clickedIdx}
            해당 댓글을 삭제하시겠습니까?
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              onClick={deleteComment}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
              }}
            >
              네
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
              }}
              onClick={() => {
                console.log(idx);
                setDeleteConfirm(!deleteConfirm);
              }}
            >
              아니오
            </span>
          </div>
        </div>
      </Modal>
    );
  };

  const EditConfimMessage = () => {
    const customModalStyles2: ReactModal.Styles = {
      overlay: {
        backgroundColor: " rgba(0, 0, 0, 0.4)",
        width: "100%",
        height: "100vh",
        zIndex: "10",
        position: "fixed",
        top: "0",
        left: "0",
      },
      content: {
        width: "80%",
        height: "15%",
        zIndex: "150",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
        justifyContent: "center",
        overflow: "auto",
      },
    };

    return (
      <Modal
        isOpen={editConfirm}
        onRequestClose={() => setEditConfirm(false)}
        ariaHideApp={false}
        style={customModalStyles2}
      ></Modal>
    );
  };

  const PopupMessage = () => {
    const customModalStyles: ReactModal.Styles = {
      overlay: {
        backgroundColor: " rgba(0, 0, 0, 0.4)",
        width: "100%",
        height: "100vh",
        zIndex: "10",
        position: "fixed",
        top: "0",
        left: "0",
      },
      content: {
        width: "80%",
        height: "15%",
        zIndex: "150",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
        justifyContent: "center",
        overflow: "auto",
      },
    };

    return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
        style={customModalStyles}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            fontSize: "1.3rem",
            height: "100%",
          }}
        >
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            onClick={() => {
              setModalIsOpen(!modalIsOpen);
              setDeleteConfirm(!deleteConfirm);
            }}
          >
            댓글 삭제하기
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            onClick={() => {
              setModalIsOpen(!modalIsOpen);
              setEditConfirm(!deleteConfirm);
            }}
          >
            내용 수정하기
          </p>
        </div>
      </Modal>
    );
  };

  return (
    <Card>
      <div className="user">
        <FontAwesomeIcon id="thumnail" icon={faCircleUser}></FontAwesomeIcon>
        <div id="userName">{comment.name} </div>
        <div id="createDate">2023.10.30</div>
        <FontAwesomeIcon
          id="extra"
          icon={faEllipsisVertical}
          onClick={() => {
            setClickedIdx(comment.idx);
            setModalIsOpen(!modalIsOpen);
          }}
        ></FontAwesomeIcon>
        <PopupMessage />
        <DeleteConfirmMessage />
        <EditConfimMessage />
      </div>
      <div id="comment">{comment.comment}</div>
    </Card>
  );
};

export default CommentCard;
