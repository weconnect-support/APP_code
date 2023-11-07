import Navigation from "./footer_style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Participate from "./detailFooterStyle";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface propsType {
  idx: string;
}

function DetailFooter({ idx }: propsType) {
  const [selectedOption, setSelectedOption] = useState(0);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [volunteerOrCustomer, setVolORCus] = useState(0);
  const navigate = useNavigate();

  const onSubmit = async () => {
    setPopUpOpen(false);
    let config = {
      method: "POST",
      url: `https://api-dev.weconnect.support/volunteer/${idx}/join`,
      headers: {
        Authorization: localStorage.getItem("jwt-token"),
      },
      data: {
        type: selectedOption,
      },
    };
    let res = await axios(config);
    console.log(res.data);
    setCheck(false);
    setVolORCus(selectedOption);
  };

  const cancelVol = async () => {
    setPopUpOpen(false);
    console.log(volunteerOrCustomer);
    let config = {
      method: "DELETE",
      url: `https://api-dev.weconnect.support/volunteer/${idx}/join`,
      headers: {
        Authorization: localStorage.getItem("jwt-token"),
      },
      data: {
        type: volunteerOrCustomer,
      },
    };
    let res = await axios(config);
    console.log(res.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api-dev.weconnect.support/volunteer/${idx}`,
        {
          headers: {
            Authorization: localStorage.getItem("jwt-token"),
          },
        }
      );

      console.log(data.data.volunteer);
      if (
        data.data.volunteer.joined === 1 ||
        data.data.volunteer.joined === 2
      ) {
        setCheck(false);
        setVolORCus(data.data.volunteer.joined);
      } else {
        setCheck(true);
      }
    };

    fetchData();
  }, [idx]);

  return (
    <Participate>
      <button
        style={{
          width: "100vw",
          height: "200%",
          backgroundColor: check ? "#ff4471" : "#e2e2e2",
          border: "none",
        }}
        onClick={!check ? () => cancelVol() : () => setPopUpOpen(true)}
      >
        {check == true ? "신청하기" : "취소하기"}
      </button>
      <Modal
        className="Popup"
        isOpen={popUpOpen}
        onRequestClose={() => setPopUpOpen(false)}
        style={{
          content: {
            position: "absolute",
            bottom: "0",
            right: "0",
            left: "0",
          },
        }}
      >
        <div
          style={{
            backgroundColor: "#e2e2e2",
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              margin: "1rem 0 0 0",
              padding: "1rem 0 1rem 0",
              height: "20vh",
              width: "100%",
              backgroundColor: "white",
              borderRadius: "2rem",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <button
              onClick={() => {
                setSelectedOption(1);
              }}
              style={{
                border: "none",
                margin: "0 auto",
                width: "7rem",
                height: "7rem",
                borderRadius: "50%",
                backgroundColor: `${selectedOption == 1 ? "#ff4471" : ""}`,
              }}
            ></button>
            <div style={{ fontWeight: "bold" }}>자원 봉사자</div>
          </div>
          <div
            style={{
              margin: "1rem 0 1rem 0",
              padding: "1rem 0 1rem 0",
              height: "20vh",
              width: "100%",
              backgroundColor: "white",
              borderRadius: "2rem",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <button
              onClick={() => {
                setSelectedOption(2);
              }}
              style={{
                border: "none",
                margin: "0 auto",
                width: "7rem",
                height: "7rem",
                borderRadius: "50%",
                backgroundColor: `${selectedOption == 2 ? "#ff4471" : ""}`,
              }}
            ></button>
            <div style={{ fontWeight: "bold" }}>봉사 수요자</div>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", height: "4rem" }}
        >
          <button
            onClick={onSubmit}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#ff4471",
              border: "none",
            }}
          >
            신청하기
          </button>
        </div>
      </Modal>
    </Participate>
  );
}

export default DetailFooter;
