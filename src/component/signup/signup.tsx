import React, { useState } from "react";
import { Steps } from "antd";
import MultiStepFormContext from "./MultiStepFormContext";
import AddressStep from "./addressStep";
import EmailStep from "./emailStep";
import PasswordStep from "./pwStep";
import NamePhoneStep from "./namephoneStep";
import AgreementStep from "./agreementStep";
import { Body_Signup } from "./signup_style";

const { Step } = Steps;

const renderStep = (step: number) => {
  switch (step) {
    case 1:
      return <EmailStep />;
    case 2:
      return <PasswordStep />;
    case 4:
      return <NamePhoneStep />;
    case 3:
      return <AddressStep />;
    case 0:
      return <AgreementStep />;
  }
};

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [address, setAddress] = useState("");
  const [address_detail, setAddress_Detail] = useState("");
  const next = () => {
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);

  return (
    <Body_Signup>
      <div className="page">
        <div className="titleWrap">
          환영합니다!
          <br></br>
          <br></br>
        </div>
        <MultiStepFormContext.Provider
          value={{
            email,
            setEmail,
            next,
            prev,
            pw,
            setPW,
            name,
            phone,
            setName,
            setPhone,
            address,
            setAddress,
            address_detail,
            setAddress_Detail,
            nickname: "",
            noti_flag: 0,
            platform: 1,
          }}
        >
          <Steps current={currentStep} direction="horizontal">
            <Step title={"Agreement"} />
            <Step title={"Email"} />
            <Step title={"Password"} />
            <Step title={"Address"} />
            <Step title={"Name and Phone"} />
          </Steps>
          <main>{renderStep(currentStep)}</main>
        </MultiStepFormContext.Provider>
      </div>
    </Body_Signup>
  );
};

export default SignupForm;