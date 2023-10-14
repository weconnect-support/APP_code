import React, { useContext } from "react";
import { Form, Formik } from "formik";
import { Button, message } from "antd";
import MultiStepFormContext from "./MultiStepFormContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NamePhoneStep: React.FC = () => {
  const contextValue = useContext(MultiStepFormContext);
  const navigate = useNavigate();
  if (!contextValue) {
    // Handle the case where the context is not provided.
    return <div>Error: Context not provided</div>;
  }
  const { name, setName, phone, setPhone, prev } = contextValue;
  const goToLogin = () => {
    //navigate('/login')
  };
  const submitForm = async (inputName: string, inputPhone: string) => {
    const { email, pw, address, address_detail, platform, token, nickname } =
      contextValue;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      });
    }
    const noti_flag = 1;
    const device_id = "he";
    var data;
    if (platform == 4) {
      data = {
        email,
        password: pw,
        name: inputName,
        phone: inputPhone,
        address,
        address_detail,
        nickname,
        platform,
        noti_flag,
        device_id,
      };
    } else {
      data = {
        access_token: token,
        name: inputName,
        phone: inputPhone,
        address,
        address_detail,
        nickname,
        platform,
        noti_flag,
        device_id,
      };
    }
    console.log(data);

    var url = "https://api-dev.weconnect.support/users/join";
    axios
      .post(url, data, {
        headers: { "Content-Type": `application/json` }, //'X-Requested-With': 'XMLHttpRequest'
      })
      .then((res) => {
        console.log(res.data);
        let messagePromise;
        if (res.data.text == "email valid") {
          messagePromise = message.error("이미 존재하는 아이디입니다.", 1);
        } else {
          messagePromise = message.success("회원가입을 축하합니다!", 1);
        }
        messagePromise.then(() => navigate("/login"));
      });
  };

  return (
    <Formik<{ name: string; phone: string }>
      initialValues={{ name, phone }}
      onSubmit={(values) => {
        setName(values.name);
        setPhone(values.phone);
        submitForm(values.name, values.phone);
      }}
      validate={(values) => {
        const errors: { name?: string; phone?: string } = {};
        if (!values.name) errors.name = "Name is required";
        if (!values.phone) errors.phone = "Phone is required";
        return errors;
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
        <div className="contentWrap">
          <Form onSubmit={handleSubmit}>
            <div className="inputTitle">이름</div>
            <div className="inputWrap">
              <input
                className="input"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="inputTitle">전화번호 입력</div>
            <div className="inputWrap">
              <input
                className="input"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <Button
              className="centerButton"
              type="default"
              onClick={() => prev()}
            >
              이전으로
            </Button>
            <Button
              className="bottomButton"
              type="primary"
              htmlType="submit"
              onClick={() => goToLogin()}
            >
              회원가입하기
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default NamePhoneStep;
