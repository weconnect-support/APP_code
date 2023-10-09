import React, { useContext } from 'react';
import {Form, Formik} from "formik";
import {Button} from "antd";
import MultiStepFormContext from "./MultiStepFormContext"

const AddressStep: React.FC  = () => {

  const contextValue = useContext(MultiStepFormContext);
  if (!contextValue) {
    // Handle the case where the context is not provided.
    return <div>Error: Context not provided</div>;
  }
  const { address, setAddress, address_detail, setAddress_Detail, next, prev} = contextValue;
  return (
    <Formik<{ address: string, address_detail: string }>
        initialValues={{ address, address_detail }}
        onSubmit={(values) => {
            setAddress(values.address);
            setAddress_Detail(values.address_detail);
            next();
        }}
        validate={(values) => {
            const errors: { address?: string, address_detail?:string } = {};
            if (!values.address) errors.address = "Address is required";
            if (!values.address_detail) errors.address_detail = "Address Detail is required";
            return errors;
        }}
    >
{({ handleSubmit, handleChange, handleBlur, values, errors }) => (
   <div className='contentWrap'>
    <Form onSubmit={handleSubmit}>
        <div className='inputTitle'>주소 입력(~~도 ~~시)</div>
        <div className='inputWrap'>
            <input 
                className='input'
                name="address"
                type="text" 
                value={values.address} 
                onChange={handleChange} 
                onBlur={handleBlur}
            />
        </div>
        <div className='inputTitle'>상세 주소</div>
        <div className='inputWrap'>
            <input 
                className='input'
                name="address_detail"
                type="text" 
                value={values.address_detail} 
                onChange={handleChange} 
                onBlur={handleBlur}
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

export default AddressStep;
