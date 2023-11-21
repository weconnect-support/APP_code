import axios from "axios";
import { time } from "console";
import { useEffect, useState, useRef } from "react";
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
  const [editData, seteditData] = useState<FormData>({
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
  const navigate = useNavigate();
  const value = [
    { value: "음악", name: "music" },
    { value: "언어", name: "language" },
    { value: "프로그래밍", name: "programming" },
    { value: "요리", name: "cooking" },
    { value: "미술", name: "art" },
    { value: "사진", name: "photograph" },
    { value: "댄스", name: "dance" },
    { value: "체육", name: "physicalActivity" },
    { value: "과학 실험", name: "scienceExperiment" },
    { value: "공예", name: "crafts" },
    { value: "지식", name: "knowledge" },
    { value: "문화(외국)", name: "culture" },
  ];
  const dropDownRef = useRef(null);
  const [categoryOption, setCategoryName] = useState("");

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

    seteditData({
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
    const categoryItem = value.find(
      (item) => item.name === data.data.data.volunteer.category
    );
    if (categoryItem) {
      setCategoryName(categoryItem.value);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    seteditData({ ...editData, [name]: value });
  };
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    seteditData({ ...editData, [name]: value });
  };
  const submitRegister = async (e: any) => {
    let data = await axios({
      method: "PUT",
      url: `https://api-dev.weconnect.support/volunteer/${idx}`,
      headers: {
        Authorization: localStorage.getItem("jwt-token"),
      },
      data: editData,
    });
    console.log(data.data);
    navigate(`/volunteer/${idx}`);
  };

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
      seteditData({ ...editData, category: value.name });
      setCategoryName(value.value);
      setIsOpen(!isOpen);
    };
    return <li onClick={ValueClick}>{value.value}</li>;
  };
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);

  return (
    <Body_Register>
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
          value={editData.title}
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
          value={editData.detail}
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
          value={editData.location}
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
          value={editData.address}
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
          value={editData.address_detail}
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
            {value.map((item, index) => (
              <CategoryDropDown
                key={index}
                value={item}
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
          value={editData.due_date}
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
          value={editData.volunteer_limit}
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
          value={editData.customer_limit}
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
          value={editData.deadline}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={submitRegister} className="bottomButton">
        등록하기
      </button>
    </Body_Register>
  );
}

export default EditBody;
