import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import Body_Register from "./volunteerEditStyle";

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
  is_dead: number;
}

function EditBody() {
  const [eidtData, seteidtData] = useState<FormData>({
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
    is_dead: 0,
  });
  const { idx } = useParams();

  useEffect(() => {
    getVolData();
  }, []);

  function formatDate(date: string) {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${year}-${month}-${day}`;
  }

  const getVolData = async () => {
    let data = await axios({
      method: "GET",
      url: `https://api-dev.weconnect.support/volunteer/${idx}`,
      headers: { authorization: localStorage.getItem("jwt-token") },
    });

    await seteidtData({
      title: data.data.data.volunteer.title,
      detail: data.data.data.volunteer.detail,
      location: data.data.data.volunteer.location,
      address: data.data.data.volunteer.address,
      address_detail: data.data.data.volunteer.address_detail,
      category: data.data.data.volunteer.category,
      due_date: formatDate(data.data.data.volunteer.due_date),
      customer_limit: data.data.data.volunteer.customer_limit,
      volunteer_limit: data.data.data.volunteer.volunteer_limit,
      deadline: formatDate(data.data.data.volunteer.deadline),
      is_dead: 0,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    seteidtData({ ...eidtData, [name]: value });
  };
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    seteidtData({ ...eidtData, [name]: value });
  };
  const submitRegister = async (e: any) => {
    let data = await axios({
      method: "PUT",
      url: `https://api-dev.weconnect.support/volunteer/${idx}`,
      headers: {
        Authorization: localStorage.getItem("jwt-token"),
      },
      data: eidtData,
    });
    console.log(data.data);
    e.preventDefault();
    console.log(eidtData);
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
            value={eidtData.title}
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
            value={eidtData.detail}
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
            value={eidtData.location}
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
            value={eidtData.address}
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
            value={eidtData.address_detail}
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
            value={eidtData.category}
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
            value={eidtData.due_date}
            onChange={handleChange}
          />
        </div>
        <label className="form-label">봉사자 최대수</label>
        <div className="inputWrap">
          <input
            type="number"
            className="input"
            name="volunteer_limit"
            placeholder="ex) 4"
            value={eidtData.volunteer_limit}
            onChange={handleChange}
          />
        </div>
        <label className="form-label">봉사 수요자 최대수</label>
        <div className="inputWrap">
          <input
            type="number"
            className="input"
            name="customer_limit"
            placeholder="ex) 12"
            value={eidtData.customer_limit}
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
            value={eidtData.deadline}
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

export default EditBody;
