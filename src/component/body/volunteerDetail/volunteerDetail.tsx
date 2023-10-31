import VolDetail_Body from "./volunteerDetailStyle";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBell,
  faEllipsis,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import CommentCard from "./comment/commentCard";

interface propsType {
  idx: string;
}

export interface comment {
  comment: string;
  created_at: Date;
  delete_time: Date | null;
  idx: number;
  is_delete: number;
  is_protect: number;
  last_modify_time: Date;
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
    deadline: Date | "";
    due_date: Date | "";
    last_modify_time: Date | "";
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
  const navigate = useNavigate();

  useEffect(() => {
    getVolIdx(Number(idx));
  }, []);

  const getVolIdx = async (idx: number) => {
    let data = await axios({
      method: "GET",
      url: `https://api-dev.weconnect.support/volunteer/${idx}`,
      headers: { authorization: localStorage.getItem("jwt-token") },
    });
    console.log(data.data.data);

    setVolIdxData({
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
        deadline: data.data.data.volunteer.deadline,
        detail: data.data.data.volunteer.detail,
        due_date: data.data.data.volunteer.due_date,
        email: data.data.data.volunteer.email,
        idx: data.data.data.volunteer.idx,
        last_modify_time: data.data.data.volunteer.last_modify_time,
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

  console.log(volIdxData);
  return (
    <VolDetail_Body>
      <div className="header">
        <FontAwesomeIcon
          onClick={goBack}
          className="backBtn"
          icon={faArrowLeft}
        />
        <FontAwesomeIcon
          className="extra"
          onClick={gologin}
          icon={faEllipsis}
        ></FontAwesomeIcon>
      </div>
      <div id="image"></div>
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
