import Body_Detail from "./userDetail_Style";
import axios from "axios";
import { useEffect, useState } from "react";

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
    device_id: "",
    noti_flag: 0,
  });
  const [token, setToken] = useState("");

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
        device_id: pageIdxData.device_id, // notification
        noti_flag: pageIdxData.noti_flag, // notification
      },
    });
    console.log(data.data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPageIdxData({ ...pageIdxData, [name]: value });
  };

  return (
    <Body_Detail>
      <form className="detailList" onSubmit={handleSubmit}>
        <label className="form-label">닉네임</label>
        <input
          type="text"
          className="input"
          name="nickname"
          defaultValue={pageIdxData.nickname}
          onChange={handleChange}
        />
        <label className="form-label">이름</label>
        <input
          type="text"
          className="input"
          name="name"
          defaultValue={pageIdxData.name}
          onChange={handleChange}
        />
        <label className="form-label">핸드폰 번호</label>
        <input
          type="text"
          className="input"
          name="phone"
          defaultValue={pageIdxData.phone}
          onChange={handleChange}
        />
        <label className="form-label">주소</label>
        <input
          type="text"
          className="input"
          name="address"
          defaultValue={pageIdxData.address}
          onChange={handleChange}
        />
        <label className="form-label">상세주소</label>
        <input
          type="text"
          className="input"
          name="address_detail"
          defaultValue={pageIdxData.address_detail}
          onChange={handleChange}
        />
        <button
          type="submit"
          style={{ marginTop: "26px" }}
          className="bottomButton"
        >
          확인
        </button>
      </form>
    </Body_Detail>
  );
}

export default Detail_Body;
