import Participate from "./detailFooterStyle";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { VolunteerData } from "./../../layout/volunteerDetail";

interface propsType {
  idx: string;
  volIdxData: VolunteerData;
  isMaker: boolean;
}

function DetailFooter({ idx, volIdxData, isMaker }: propsType) {
  const [selectedOption, setSelectedOption] = useState(0);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [volunteerOrCustomer, setVolORCus] = useState(0);
  const [checkMaker, setCheckMaker] = useState(false);
  const [peopleCheck, setPeopleCheck] = useState(false);
  const [colse, setColse] = useState(false);
  const navigate = useNavigate();
  const [is_dead, setIs_deat] = useState(false);
  const CurrentRegisterPeopleCheck = () => {
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
        isOpen={peopleCheck}
        onRequestClose={() => setPeopleCheck(false)}
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
          리스트 불러야함
        </div>
      </Modal>
    );
  };

  const ColseVolunteer = () => {
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
    const colseVolunteer = async (e: any) => {
      if (is_dead) {
        let data = await axios({
          method: "PUT",
          url: `https://api-dev.weconnect.support/volunteer/${idx}`,
          headers: {
            Authorization: localStorage.getItem("jwt-token"),
          },
          data: {
            title: volIdxData.volunteer.title,
            detail: volIdxData.volunteer.detail,
            location: volIdxData.volunteer.location,
            address: volIdxData.volunteer.address,
            address_detail: volIdxData.volunteer.address_detail,
            category: volIdxData.volunteer.category,
            due_date: volIdxData.volunteer.due_date,
            customer_limit: volIdxData.volunteer.customer_limit,
            volunteer_limit: volIdxData.volunteer.volunteer_limit,
            deadline: volIdxData.volunteer.deadline,
            is_dead: 0,
          },
        });
        console.log(data.data);
      }
      if (!is_dead) {
        let data = await axios({
          method: "PUT",
          url: `https://api-dev.weconnect.support/volunteer/${idx}`,
          headers: {
            Authorization: localStorage.getItem("jwt-token"),
          },
          data: {
            title: volIdxData.volunteer.title,
            detail: volIdxData.volunteer.detail,
            location: volIdxData.volunteer.location,
            address: volIdxData.volunteer.address,
            address_detail: volIdxData.volunteer.address_detail,
            category: volIdxData.volunteer.category,
            due_date: volIdxData.volunteer.due_date,
            customer_limit: volIdxData.volunteer.customer_limit,
            volunteer_limit: volIdxData.volunteer.volunteer_limit,
            deadline: volIdxData.volunteer.deadline,
            is_dead: 1,
          },
        });
        console.log(data.data);
      }
      window.location.reload();
    };

    return (
      <Modal
        isOpen={colse}
        onRequestClose={() => setColse(false)}
        ariaHideApp={false}
        style={customModalStyles}
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
            {`${
              is_dead ? "마감을 취소하시겠습니까?" : "모집을 마감하시겠습니까?"
            }`}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
              }}
              onClick={colseVolunteer}
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
                setColse(false);
              }}
            >
              아니오
            </span>
          </div>
        </div>
      </Modal>
    );
  };

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
        data.data.volunteer.user_idx ===
        Number(localStorage.getItem("user-idx"))
      ) {
        setCheckMaker(true);
        if (data.data.volunteer.is_dead === 1) {
          setIs_deat(true);
        }
      }
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
        className={`${isMaker ? "hidden" : ""}`}
        style={{
          width: "100vw",
          height: "100%",
          backgroundColor: check ? "#ff4471" : "#e2e2e2",
          border: "none",
        }}
        onClick={!check ? () => cancelVol() : () => setPopUpOpen(true)}
      >
        {check === true ? "신청하기" : "취소하기"}
      </button>
      <button
        className={` makerFooter ${isMaker ? "" : "hidden"}`}
        onClick={() => {
          setPeopleCheck(true);
        }}
      >
        인원 확인
      </button>
      <CurrentRegisterPeopleCheck />
      <button
        className={` makerFooter ${isMaker ? "" : "hidden"}`}
        onClick={() => {
          setColse(true);
        }}
      >
        {`${is_dead ? "마감 취소" : "모집 마감"} `}
      </button>
      <ColseVolunteer />

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
                backgroundColor: `${selectedOption === 1 ? "#ff4471" : ""}`,
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
                backgroundColor: `${selectedOption === 2 ? "#ff4471" : ""}`,
              }}
            ></button>
            <div style={{ fontWeight: "bold" }}>봉사 수요자</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "4rem",
          }}
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
