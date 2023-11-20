import Body_Detail from "./registerBody_Style";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import Body_Register from "./registerBody_Style";

interface FormData {
  title: string;
  detail: string;
  location: string;
  address: string;
  address_detail: string;
  category: string;
  due_date: string;
  customer_limit: number;
  volunteer_limit: number;
  deadline: string;
}

function Register_Body() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState<FormData>({
    title: "",
    detail: "",
    location: "",
    address: "",
    address_detail: "",
    category: "",
    due_date: "",
    customer_limit: 0,
    volunteer_limit: 0,
    deadline: "",
  });

  const useDetectClose = (ref: any, initialState: any) => {
    const [isOpen, setIsOpen] = useState(initialState);
    useEffect(() => {
      const pageClickEvent = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setIsOpen(!isOpen);
        }
      };
      if (isOpen) {
        window.addEventListener("click", pageClickEvent);
      }
      return () => {
        window.removeEventListener("click", pageClickEvent);
      };
    }, [isOpen, ref]);
    return [isOpen, setIsOpen];
  };

  const CategoryDropDown = ({
    value,
    setCategoryName,
    setIsOpen,
    isOpen,
  }: any) => {
    const ValueClick = () => {
      setRegisterData({ ...registerData, category: value });
      setCategoryName(value);
      setIsOpen(!isOpen);
    };
    return <li onClick={ValueClick}>{value}</li>;
  };

  const dropDownRef = useRef(null);
  const [categoryOption, setCategoryName] = useState("항목을 선택해 주세요!");
  const phoneList = [
    "음악",
    "언어",
    "프로그래밍",
    "요리",
    "미술",
    "사진",
    "댄스",
    "체육",
    "과학 실험",
    "공예",
    "지식",
    "문화(외국)",
  ];

  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };
  const submitRegister = async (e: any) => {
    e.preventDefault();
    console.log(registerData);
    if (registerData.category === "항목을 선택해 주세요!") {
      alert("카테고리를 선택해주세요!");
    } else {
      let data = await axios({
        method: "POST",
        url: "https://api-dev.weconnect.support/volunteer",
        headers: {
          Authorization: localStorage.getItem("jwt-token"),
        },
        data: {
          title: registerData.title,
          type: 1, //1 = volunteer, 2 customer
          detail: registerData.detail,
          location: registerData.location,
          address: registerData.address,
          address_detail: registerData.address_detail,
          category: registerData.category,
          due_date: registerData.due_date,
          customer_limit: registerData.customer_limit,
          volunteer_limit: registerData.volunteer_limit,
          deadline: registerData.deadline,
          photo: [],
        },
      });
      console.log(data.data);
      navigate("/");
    }
  };

  return (
    <Body_Register>
      <form className="register" onSubmit={submitRegister}>
        <div className="titleWrap">
          활동 등록
          <br></br>
          <br></br>
        </div>
        <label className="form-label">Title</label>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            name="title"
            placeholder="ex) 영어 기초"
            onChange={handleChange}
          />
        </div>
        <label className="form-label">Detail</label>
        <div className="inputWrap">
          <textarea // 글씨체 통일 필요
            className="input"
            name="detail"
            style={{
              height: "1.5rem",
              paddingBottom: "3rem",
            }}
            placeholder="ex) 영어 알파벳마다 발음을 공부해봐요!"
            onChange={handleChangeText}
          />
        </div>
        <label className="form-label">희망장소</label>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            name="location"
            placeholder="ex) 아주대 앞 카페"
            onChange={handleChange}
          />
        </div>
        <label className="form-label">주소</label>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            name="address"
            placeholder="ex) 경기도 수원시"
            onChange={handleChange}
          />
        </div>
        <label className="form-label">상세 주소</label>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            name="address_detail"
            placeholder="ex) 월드컵로 206"
            onChange={handleChange}
          />
        </div>
        <label className="form-label">카테고리</label>
        <div className="categorySelect" ref={dropDownRef}>
          <input
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            value={categoryOption}
          />
          {isOpen && (
            <ul>
              {phoneList.map((value, index) => (
                <CategoryDropDown
                  key={index}
                  value={value}
                  setIsOpen={setIsOpen}
                  setCategoryName={setCategoryName}
                  isOpen={isOpen}
                />
              ))}
            </ul>
          )}
        </div>
        <label className="form-label">활동일자</label>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            name="due_date"
            placeholder="ex) 2023-12-14"
            onChange={handleChange}
          />
        </div>
        <label className="form-label">봉사자 최대수</label>
        <div className="inputWrap">
          <input
            type="number"
            className="input"
            name="customer_limit"
            placeholder="ex) 4"
            onChange={handleChange}
          />
        </div>
        <label className="form-label">봉사 수요자 최대수</label>
        <div className="inputWrap">
          <input
            type="number"
            className="input"
            name="volunteer_limit"
            placeholder="ex) 12"
            onChange={handleChange}
          />
        </div>
        <label className="form-label">마감일자</label>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            name="deadline"
            placeholder="ex) 2023-12-14"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="bottomButton">
          등록하기
        </button>
      </form>
    </Body_Register>
  );
}

export default Register_Body;
