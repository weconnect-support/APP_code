import Body_Detail from "./registerBody_Style";
import axios from "axios";
import { useEffect, useState } from "react";
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

    let data = await axios({
      method: "POST",
      url: "https://api-dev.weconnect.support/volunteer",
      headers: {
        Authorization: localStorage.getItem("jwt-token"),
      },
      data: {
        title: "title tett",
        type: 1, //1 = volunteer, 2 customer
        detail: "detail test",
        location: "location test",
        address: "address test",
        address_detail: "address detail",
        category: "category test",
        due_date: "2023-12-20",
        customer_limit: 1,
        volunteer_limit: 1,
        deadline: "2023-12-30",
        photo: [],
      },
    });
    console.log(data.data);
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
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            name="category"
            placeholder="ex) 교육"
            onChange={handleChange}
          />
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
