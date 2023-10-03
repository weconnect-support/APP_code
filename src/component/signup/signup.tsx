import React, { useState } from 'react';
import { Steps } from "antd"
import MultiStepFormContext from './MultiStepFormContext';

import EmailStep from './emailStep';
import PasswordStep from './pwStep';
import NamePhoneStep from './namephoneStep';
// import AgreementStep from './agreementStep';
import { Body_Signup } from "./signup_style"

const { Step } = Steps;


const renderStep = (step: number) => {
  switch (step){
    // case 0:
    //   return <AgreementStep/>;
    // case 1:
    //   return <EmailStep/>;
    // case 2:
    //   return <PasswordStep/>;
    // case 3:
    //   return <NamePhoneStep/>;

    case 0:
      return <EmailStep/>;
    case 1:
      return <PasswordStep/>;
    case 2:
      return <NamePhoneStep/>;
  }
}

const SignupForm = () => {
  
  const [agreement, setAgreement] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if(currentStep ===3){
      setCurrentStep(0);
      setAgreement("");
      setEmail("");
      setPW("");
      setName("");
      setPhone("");
      return;
    }
    
    setCurrentStep(currentStep+1);
  }
  const prev = () => setCurrentStep(currentStep-1);
  
  return(
    <Body_Signup>
      <div className='page'>
        <div className='titleWrap'>
          환영합니다!
          <br></br>
          <br></br>
        </div>
        <MultiStepFormContext.Provider value = {{email, setEmail, next, prev, pw, setPW, name, phone, setName, setPhone}}>
          <Steps current = {currentStep} direction="horizontal">
            <Step title = {"Checking agreement"}/>
            <Step title = {"Setting Email"}/>
            <Step title = {"Setting Password"}/>
            <Step title = {"Setting name and phone num"}/>
          </Steps>
          <main>{renderStep(currentStep)}</main>
        </MultiStepFormContext.Provider>
      </div>
    </Body_Signup>
  )
};

export default SignupForm;
