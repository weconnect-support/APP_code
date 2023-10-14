import Body_Detail from "./userDetail_Style";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface propsType {
  idx: string;
}
interface FormData {
  nickname: string;
  name: string;
  phone: string;
  address: string;
  address_detail: string;
  device_id: string;
  noti_flag: number;
}

function Detail_Body({ idx }: propsType) {
  const [pageIdxData, setPageIdxData] = useState<FormData>({
    nickname: "",
    name: "",
    phone: "",
    address: "",
    address_detail: "",
    noti_flag: 0,
    device_id: "",
  });
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    getUserIdx(Number(idx));
  }, []);

  const getUserIdx = async (idx: number) => {
    const token = localStorage.getItem("jwt-token");
    if (!token) {
      return console.log("no token");
    } else {
      setToken(token);
      let data = await axios({
        url: `https://api-dev.weconnect.support/users/${idx}`,
        method: "GET",
        headers: { authorization: token },
      });
      console.log("유저정보 잘 가져와용~~");
      setPageIdxData({
        nickname: data.data.userInfo.nickname,
        name: data.data.userInfo.name,
        phone: data.data.userInfo.phone,
        address: data.data.userInfo.address,
        address_detail: data.data.userInfo.address_detail,
        device_id: data.data.userInfo.device_id,
        noti_flag: data.data.userInfo.noti_flag,
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(pageIdxData);

    if (edit) {
      let data = await axios({
        url: "https://api-dev.weconnect.support/users",
        method: "PATCH",
        headers: {
          authorization: token,
        },
        data: {
          nickname: pageIdxData.nickname,
          name: pageIdxData.name,
          phone: pageIdxData.phone,
          address: pageIdxData.address,
          address_detail: pageIdxData.address_detail,
          noti_flag: pageIdxData.noti_flag,
          device_id: pageIdxData.device_id,
        },
      });
      console.log(data.data);
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPageIdxData({ ...pageIdxData, [name]: value });
  };

  const deleteUser = async () => {
    let data = await axios({
      url: "https://api-dev.weconnect.support/users",
      method: "DELETE",
      headers: { authorization: token },
    });
    console.log(data.data);
    localStorage.removeItem("jwt-token");
    localStorage.removeItem("user-idx");
    navigate("/");
  };

  return (
    <Body_Detail>
      <form className="detailList" onSubmit={handleSubmit}>
        <div className="titleWrap">
          프로필
          <br></br>
          <br></br>
        </div>
        <label className="form-label">닉네임</label>
        <div className={`inputWrap ${edit ? "" : "disabled"}`}>
          <input
            type="text"
            className="input"
            name="nickname"
            defaultValue={pageIdxData.nickname}
            onChange={handleChange}
            disabled={!edit}
          />
        </div>
        <label className="form-label">이름</label>
        <div className={`inputWrap ${edit ? "" : "disabled"}`}>
          <input
            type="text"
            className="input"
            name="name"
            defaultValue={pageIdxData.name}
            onChange={handleChange}
            disabled={!edit}
          />
        </div>
        <label className="form-label">핸드폰 번호</label>
        <div className={`inputWrap ${edit ? "" : "disabled"}`}>
          <input
            type="text"
            className="input"
            name="phone"
            defaultValue={pageIdxData.phone}
            onChange={handleChange}
            disabled={!edit}
          />
        </div>
        <label className="form-label">주소</label>
        <div className={`inputWrap ${edit ? "" : "disabled"}`}>
          <input
            type="text"
            className="input"
            name="address"
            defaultValue={pageIdxData.address}
            onChange={handleChange}
            disabled={!edit}
          />
        </div>
        <label className="form-label">상세주소</label>
        <div className={`inputWrap ${edit ? "" : "disabled"}`}>
          <input
            type="text"
            className="input"
            name="address_detail"
            defaultValue={pageIdxData.address_detail}
            onChange={handleChange}
            disabled={!edit}
          />
        </div>
        <button type="submit" className="bottomButton">
          {edit ? "수정완료" : "수정"}
        </button>
      </form>

      {edit ? null : (
        <button onClick={deleteUser} className="delButton">
          탈퇴하기
        </button>
      )}
    </Body_Detail>
  );
}

export default Detail_Body;
