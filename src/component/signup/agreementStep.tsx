import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MultiStepFormContext from "./MultiStepFormContext";
import { Form, Formik } from "formik";
import { Button } from "antd";
const AgreementStep: React.FC = () => {
  const [personalInfoAgree, setPersonalInfoAgree] = useState(false);
  const [locationInfoAgree, setLocationInfoAgree] = useState(false);
  const navigate = useNavigate();
  const contextValue = useContext(MultiStepFormContext);
  if (!contextValue) {
    // Handle the case where the context is not provided.
    return <div>Error: Context not provided</div>;
  }
  const { email, next } = contextValue;
  const goToMain = () => {
    navigate("/");
  };
  // 모든 동의 사항이 체크되었는지 확인하는 함수
  const isAllChecked = () => personalInfoAgree && locationInfoAgree;
  return (
    <Formik<{ email: string }>
      initialValues={{ email }}
      onSubmit={() => {
        next();
      }}
      validate={() => {}}
    >
      {({ handleSubmit }) => (
        <div className="contentWrap">
          <Form onSubmit={handleSubmit}>
            <div className="inputTitle">개인정보수집동의</div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={personalInfoAgree}
                  onChange={() => setPersonalInfoAgree(!personalInfoAgree)}
                />
                개인정보 수집에 동의합니다.
              </label>
            </div>
            <div className="inputTitle">위치정보수집동의</div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={locationInfoAgree}
                  onChange={() => setLocationInfoAgree(!locationInfoAgree)}
                />
                위치 정보 수집에 동의합니다.
              </label>
            </div>
            <Button
              className="centerButton"
              type="default"
              onClick={() => goToMain()}
            >
              회원가입 취소
            </Button>
            {isAllChecked() && (
              <Button
                className="bottomButton"
                type="primary"
                onClick={() => handleSubmit()}
              >
                다음으로
              </Button>
            )}
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AgreementStep;
