import VolDetail_Body from "./volunteerDetailStyle";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEllipsis,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import TextareaAutosize from "react-textarea-autosize";
import { useNavigate } from "react-router-dom";
import CommentCard from "./comment/commentCard";
import Modal from "react-modal";
import FavoriteButton from "./favoriteButton/favoriteButton";

interface propsType {
  idx: string;
}

export interface comment {
  comment: string;
  created_at: string;
  delete_time: string;
  idx: number;
  is_delete: number;
  is_protect: number;
  last_modify_time: string;
  name: string;
  nickname: string;
  user_idx: number;
  volunteer_idx: number;
}

interface FormData {
  comments: comment[];
  current_customer: number;
  current_volunteer: number;
  customers: [];
  volunteers: [];
  volunteer: {
    address: string;
    address_detail: string;
    category: string;
    customer_limit: number;
    deadline: string;
    due_date: string;
    last_modify_time: string;
    detail: string;
    email: string;
    idx: string;
    location: string;
    name: string;
    nickname: string;
    title: string;
    user_idx: number;
    volunteer_limit: number;
  };
}

const Volunteer_Detail = ({ idx }: propsType) => {
  const [volIdxData, setVolIdxData] = useState<FormData>({
    comments: [],
    current_customer: 0,
    current_volunteer: 0,
    customers: [],
    volunteers: [],
    volunteer: {
      address: "",
      address_detail: "",
      category: "",
      customer_limit: 0,
      deadline: "",
      detail: "",
      due_date: "",
      email: "",
      idx: "",
      last_modify_time: "",
      location: "",
      name: "",
      nickname: "",
      title: "",
      user_idx: 0,
      volunteer_limit: 0,
    },
  });
  const [enterComment, setEnterComment] = useState("");
  const [isExtraOption, setIsExtraOption] = useState(false);
  const [isExtraOptionOpen, setIsExtraOptionOpen] = useState(false);
  const [checkDeleteOption, setCheckDeleteOption] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getVolIdx(Number(idx));
  }, []);

  function formatDate(date: string) {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${year}-${month}-${day}`;
  }

  const getVolIdx = async (idx: number) => {
    let data = await axios({
      method: "GET",
      url: `https://api-dev.weconnect.support/volunteer/${idx}`,
      headers: { authorization: localStorage.getItem("jwt-token") },
    });
    console.log(data.data.data);

    if (
      data.data.data.volunteer.user_idx ===
      Number(localStorage.getItem("user-idx"))
    ) {
      setIsExtraOption(true);
    }

    await setVolIdxData({
      comments: data.data.data.comments,
      current_customer: data.data.data.current_customer,
      current_volunteer: data.data.data.current_volunteer,
      customers: data.data.data.customers,
      volunteers: data.data.data.volunteers,
      volunteer: {
        address: data.data.data.volunteer.address,
        address_detail: data.data.data.volunteer.address_detail,
        category: data.data.data.volunteer.category,
        customer_limit: data.data.data.volunteer.customer_limit,
        deadline: formatDate(data.data.data.volunteer.deadline),
        detail: data.data.data.volunteer.detail,
        due_date: formatDate(data.data.data.volunteer.due_date),
        email: data.data.data.volunteer.email,
        idx: data.data.data.volunteer.idx,
        last_modify_time: formatDate(data.data.data.volunteer.last_modify_time),
        location: data.data.data.volunteer.location,
        name: data.data.data.volunteer.name,
        nickname: data.data.data.volunteer.nickname,
        title: data.data.data.volunteer.title,
        user_idx: data.data.data.volunteer.user_idx,
        volunteer_limit: data.data.data.volunteer.volunteer_limit,
      },
    });
  };

  const goBack = () => {
    navigate(-1);
  };
  const gologin = () => {};

  const textAreaChange = (e: any) => {
    setEnterComment(e.target.value);
  };
  const submitMakeUp = async () => {
    let config = {
      method: "POST",
      url: `https://api-dev.weconnect.support/volunteer/${idx}/comment`,
      headers: {
        Authorization: localStorage.getItem("jwt-token"),
      },
      data: {
        comment: enterComment,
        is_protect: 0,
      },
    };

    let res = await axios(config);
    window.location.reload();
    console.log(res.data);
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
        isOpen={isExtraOptionOpen}
        onRequestClose={() => setIsExtraOptionOpen(false)}
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
              setIsExtraOptionOpen(false);
              setCheckDeleteOption(true);
            }}
          >
            모집 삭제하기
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            onClick={() => {
              navigate(`./edit`);
            }}
          >
            내용 수정하기
          </p>
        </div>
      </Modal>
    );
  };

  const DeleteConfirmMessage = () => {
    const deleteVolunteer = async () => {
      let data = await axios({
        method: "delete",
        url: `https://api-dev.weconnect.support/volunteer/${idx}`,
        headers: {
          Authorization: localStorage.getItem("jwt-token"),
        },
      });
      console.log(data.data);
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
        isOpen={checkDeleteOption}
        onRequestClose={() => setCheckDeleteOption(false)}
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
            해당 모집을 삭제하시겠습니까?
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              onClick={deleteVolunteer}
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
                setCheckDeleteOption(false);
              }}
            >
              아니오
            </span>
          </div>
        </div>
      </Modal>
    );
  };

  return (
    <VolDetail_Body>
      <div className="header">
        <FontAwesomeIcon
          onClick={goBack}
          className="backBtn"
          icon={faArrowLeft}
        />
        <FontAwesomeIcon
          className={`extra ${isExtraOption ? "" : "disabled"}`}
          onClick={() => {
            setIsExtraOptionOpen(true);
          }}
          icon={faEllipsis}
        ></FontAwesomeIcon>
        <PopupMessage />
        <DeleteConfirmMessage />
      </div>
      <div id="image">
        <FavoriteButton idx={idx}/>
      </div>
      <div className="info">
        <div id="address">{volIdxData.volunteer.address}</div>
        <div id="title">{volIdxData.volunteer.name}</div>
        <div id="date"></div>
        <div id="category">
          <span>카테고리.</span>
          <span id="categoryTag">{volIdxData.volunteer.category}</span>
        </div>
      </div>
      <div className="explain">
        <div>활동 내용</div>
        <div id="detail">{volIdxData.volunteer.detail}</div>
      </div>
      <div className="comment">
        <div id="enterComment">
          <TextareaAutosize
            name="editContents"
            id="enterArea"
            onChange={textAreaChange}
            placeholder="댓글을 입력해주세요."
          ></TextareaAutosize>
          <FontAwesomeIcon
            id="enterCommentBtn"
            icon={faSquareArrowUpRight}
            onClick={submitMakeUp}
          ></FontAwesomeIcon>
        </div>

        <p>댓글 {volIdxData.comments.length}</p>
        {volIdxData.comments.map((comment) => (
          <CommentCard key={comment.idx} comment={comment} idx={idx} />
        ))}
      </div>
      <div style={{ margin: "0 0 4rem 0" }}></div>
    </VolDetail_Body>
  );
};

export default Volunteer_Detail;
