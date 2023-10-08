import React, { useContext } from 'react';
import {Form, Formik} from "formik";
import {Button} from "antd";
import MultiStepFormContext from "./MultiStepFormContext"

const PwStep: React.FC  = () => {

  const contextValue = useContext(MultiStepFormContext);
  if (!contextValue) {
    // Handle the case where the context is not provided.
    return <div>Error: Context not provided</div>;
  }
  const { pw, password_verify, setPW, setPassword_verify, next, prev} = contextValue;
  
  return (
    <Formik<{ pw: string, password_verify: string }>
      initialValues={{ pw, password_verify }}
      onSubmit={(values) => {
        setPW(values.pw);
        setPassword_verify(values.password_verify);
        next();
      }}
      validate={(values) => {
        const errors: { pw?: string, password_verify?: string } = {};
        if (!values.pw) errors.pw = "Password is required";
        if (!values.password_verify) errors.password_verify = "Password is required";
        return errors;
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
        <div className='contentWrap'>
          <Form onSubmit={handleSubmit}> 
            <div className='inputTitle'>비밀번호</div>
            <div className='inputWrap'>
              <input 
                className='input'
                name="pw"
                type="password" 
                value={values.pw} 
                onChange={handleChange} 
                onBlur={handleBlur}
              />
            </div>
            <div className='inputTitle'>비밀번호 확인</div>
            <div className='inputWrap'>
              <input 
                className='input'
                name="password_verify"
                type="password" 
                value={values.password_verify}
                onChange={handleChange} 
                onBlur={handleBlur}
              />
            </div>
            <Button className='centerButton' type="default" onClick={() => prev()}>
              이전으로
            </Button>
            <Button 
              className='bottomButton' 
              type="primary" 
              htmlType="submit" 
              onClick={() => handleSubmit()}
              disabled={values.pw !== values.password_verify}
            >
              {values.pw === values.password_verify ? '다음으로' : '비밀번호가 다릅니다'}
            </Button>
          </Form>
        </div> 
      )}
    </Formik>
  );
};

export default PwStep;
