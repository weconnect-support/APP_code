import React, { useContext } from 'react';
import {Form, Formik} from "formik";
import {Button} from "antd";
import MultiStepFormContext from "./MultiStepFormContext"

const EmailStep: React.FC  = () => {

  const contextValue = useContext(MultiStepFormContext);
  if (!contextValue) {
    // Handle the case where the context is not provided.
    return <div>Error: Context not provided</div>;
  }
  const { platform, email, setEmail, nickname, setNickname, next, prev} = contextValue;
  return (
    <Formik<{ email: string, nickname: string }>
  initialValues={{ email, nickname }}
  onSubmit={(values) => {
    setEmail(values.email);
    setNickname(values.nickname);
    next();
  }}
  validate={(values) => {
    const errors: { email?: string, nickname?: string } = {};
    if (platform==4 && !values.email) errors.email = "Email is required";
    if (!values.nickname) errors.nickname = "Nickname is required";
    return errors;
  }}
>
{({ handleSubmit, handleChange, handleBlur, values, errors }) => (
    <div className='contentWrap'>
      <Form onSubmit={handleSubmit}>
        <div style={{display: platform==4 ? '' : 'none'}} className='inputTitle'>이메일 입력</div>
        <div style={{display: platform==4 ? '' : 'none'}} className='inputWrap'>
          <input 
            className='input'
            name="email"
            type= "email" 
            value={values.email} 
            onChange={handleChange} 
            onBlur={handleBlur}
            placeholder='이메일을 입력하세요'
          />
        </div>
        <div className='inputTitle'>닉네임 입력</div>
        <div className='inputWrap'> 
          <input 
            className='input'
            name="nickname"
            type="text" 
            value={values.nickname} 
            onChange={handleChange} 
            onBlur={handleBlur}
            placeholder='닉네임을 입력하세요'
          />
        </div>
        <Button className='centerButton' type="default" onClick={() => prev()}>
          이전으로
        </Button>
        <Button className='bottomButton' type="primary" htmlType="submit" onClick={() => handleSubmit()}>
          다음으로
        </Button>
      </Form>
   </div> 
)}
</Formik>
  );
};

export default EmailStep;
