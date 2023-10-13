import Body_Detail from "./registerBody_Style";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Body_Register from "./registerBody_Style";

interface propsType{
    idx: string;
}
interface FormData{
    title: string;
    detail: string;
    location: string;
    address: string;
    address_detail: string;
    category: string;
    due_Date: Date | '';
    customer_limit: number;
    volunteer_limit: number;
    deadline: Date | '';
}

function Register_Body() {
    const [values, setValues] = useState<FormData>({
        title: "",
        detail: "",
        location: "",
        address: "",
        address_detail: "",
        category: "",
        due_Date: '',
        customer_limit: 0,
        volunteer_limit: 0,
        deadline: '',
    });
    return(
        <Body_Register>
            <form className="register">
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
                />  
                </div>
                <label className="form-label">Detail</label>
                <div className="inputWrap" >
                <textarea // 글씨체 통일 필요
                    className="input"
                    name="detail"
                    style={{
                        height: "1.5rem",
                        paddingBottom: "3rem",
                    }}
                    placeholder="ex) 영어 알파벳마다 발음을 공부해봐요!"
                />  
                </div>
                <label className="form-label">희망장소</label>
                <div className="inputWrap">
                <input
                    type="text"
                    className="input"
                    name="location"
                    placeholder="ex) 아주대 앞 카페"
                />  
                </div>
                <label className="form-label">주소</label>
                <div className="inputWrap">
                <input
                    type="text"
                    className="input"
                    name="address"
                    placeholder="ex) 경기도 수원시"
                />  
                </div>
                <label className="form-label">상세 주소</label>
                <div className="inputWrap">
                <input
                    type="text"
                    className="input"
                    name="address_detail"
                    placeholder="ex) 월드컵로 206"
                />  
                </div>
                <label className="form-label">카테고리</label>
                <div className="inputWrap">
                <input
                    type="text"
                    className="input"
                    name="category"
                    placeholder="ex) 교육"
                />  
                </div>
                <label className="form-label">활동일자</label>
                <div className="inputWrap">
                <input
                    type="text"
                    className="input"
                    name="title"
                    placeholder="ex) 2023.12.14"
                />  
                </div>
                <label className="form-label">봉사자 최대수</label>
                <div className="inputWrap">
                <input
                    type="number"
                    className="input"
                    name="title"
                    placeholder="ex) 4"
                />  
                </div>
                <label className="form-label">봉사 수요자 최대수</label>
                <div className="inputWrap">
                <input
                    type="text"
                    className="input"
                    name="title"
                    placeholder="ex) 12"
                />  
                </div>
                <label className="form-label">마감일자</label>
                <div className="inputWrap">
                <input
                    type="text"
                    className="input"
                    name="title"
                    placeholder="ex) 2023.12.14"
                />  
                </div>
            </form>
        </Body_Register>
    )
}

export default Register_Body;