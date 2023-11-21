import Footer from "../component/footer/footer";
import { useParams } from "react-router";
import Volunteer_Detail from "../component/body/volunteerDetail/volunteerDetail";

import DetailFooter from "./../component/footer/detailFooter";
import { useEffect, useState } from "react";
import axios from "axios";
import { comment } from "./../component/body/volunteerDetail/volunteerDetail";

export interface VolunteerData {
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
    img: string;
  };
}

function VolDetail() {
  const [volIdxData, setVolIdxData] = useState<VolunteerData>({
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
      img: "",
    },
  });
  const [isMaker, setIsMaker] = useState(false);

  const params = useParams();

  useEffect(() => {
    getVolIdx(Number(params.idx));
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
        img: data.data.data.volunteer.img,
      },
    });
    if (
      data.data.data.volunteer.user_idx ===
      Number(localStorage.getItem("user-idx"))
    ) {
      console.log("asdf");
      setIsMaker(true);
    }
  };

  if (!params.idx) {
    return null;
  }

  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        padding: "0",
      }}
    >
      <Volunteer_Detail
        volIdxData={volIdxData}
        isMaker={isMaker}
        idx={params.idx}
      />
      <DetailFooter
        volIdxData={volIdxData}
        isMaker={isMaker}
        idx={params.idx}
      />
    </div>
  );
}

export default VolDetail;
