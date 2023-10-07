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
  const { email, setEmail, next, prev} = contextValue;
  return (
    <Formik<{ email: string }>
  initialValues={{ email }}
  onSubmit={(values) => {
    setEmail(values.email);
    next();
  }}
  validate={(values) => {
    const errors: { email?: string } = {};
    if (!values.email) errors.email = "Email is required";
    return errors;
  }}
>
{({ handleSubmit, handleChange, handleBlur, values, errors }) => (
   <div className='contentWrap'>
    <Form onSubmit={handleSubmit}>
     <div className='inputTitle'>이메일 입력</div>
     <div className='inputWrap'>
       <input 
          className='input'
          name="email"
          type="email" 
          value={values.email} 
          onChange={handleChange} 
          onBlur={handleBlur}
       />
     </div>
     <Button className='centerButton' type="default" onClick={() => prev()}>
       이전으로
     </Button>
     <Button className='bottomButton' type="primary" onClick={() => handleSubmit()}>
       다음으로
     </Button>
     </Form>
   </div> 
)}
</Formik>
  );
};

export default EmailStep;
