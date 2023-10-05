import React, { useContext } from 'react';
import {Formik} from "formik";
import {Button} from "antd";
import MultiStepFormContext from "./MultiStepFormContext"

const PwStep: React.FC  = () => {

  const contextValue = useContext(MultiStepFormContext);
  if (!contextValue) {
    // Handle the case where the context is not provided.
    return <div>Error: Context not provided</div>;
  }
  const { pw, setPW, next, prev} = contextValue;
  return (
    <Formik<{ pw: string }>
  initialValues={{ pw }}
  onSubmit={(values) => {
    setPW(values.pw);
    next();
  }}
  validate={(values) => {
    const errors: { pw?: string } = {};
    if (!values.pw) errors.pw = "Email is required";
    return errors;
  }}
>
{({ handleSubmit, handleChange, handleBlur, values, errors }) => (
   <div className='contentWrap'>
     <div className='inputTitle'>비밀번호 입력</div>
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
     <Button type="default" onClick={() => prev()}>
       Back
     </Button>
     <Button className='bottomButton' type="primary" onClick={() => handleSubmit()}>
       Next
     </Button>
   </div> 
)}
</Formik>
  );
};

export default PwStep;
