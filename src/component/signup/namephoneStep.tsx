import React, { useContext } from 'react';
import {Formik} from "formik";
import {Button} from "antd";
import MultiStepFormContext from "./MultiStepFormContext"
import axios from 'axios'


const NamePhoneStep: React.FC  = () => {

  const contextValue = useContext(MultiStepFormContext);
  if (!contextValue) {
    // Handle the case where the context is not provided.
    return <div>Error: Context not provided</div>;
  }
  const { name, setName, phone, setPhone, prev} = contextValue;

  const submitForm = async () => {
    const { email, pw, name, phone} = contextValue;
    const data = {
      email, 
      pw, 
      name,
      phone
    };
    console.log(data);
    
    var url = 'https://api-dev.weconnect.support/users/join'
    axios.post(url, data, {headers: {"Content-Type": `application/json`}//'X-Requested-With': 'XMLHttpRequest'
  }
  ).then((res)=>{
    console.log(res);
  })
  // .catch((err)=>console.log(err))
  ;
    // fetch('', {//axios
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
    // .then(response => response.json())//then -> async 함수 밖 await 함수 내 timeout, 비동기 10초 123456으로; promise -> 성공resolve 실패reject;
    // //
    // .then(data => console.log(data))
    // .catch((error) => {
    //   console.error('Error:', error); 
    // });
    
    //블로그
    // const onSubmit = useCallback(
    //   (e) => {
    //     e.preventDefault();
    //     console.log(email, nickname, password, passwordCheck);
    //     if (!mismatchError) {
    //       console.log('서버로 회원가입하기');
    //       setSignUpError('');
    //       setSignUpSuccess(false);
    //       // 요청 보내기 직전에 값들을 전부 초기화 해주자. 아니라면 요청을 연달아 날릴 때
    //       // 첫번째 요청때 남아있던 결과가 두번째 요청때도 똑같이 표시되는
    //       // 문제가 있을 수 있다.
    //       axios
    //         .post('/api/users', {
    //           email,
    //           nickname,
    //           password,
    //         })
    //         .then((response) => {
    //           // 성공시
    //           console.log(response);
    //           setSignUpSuccess(true);
    //         })
    //         .catch((error) => {
    //           // 실패시
    //           console.log(error.response);
    //           setSignUpError(error.response.data);
    //         })
    //         .finally(() => {});
    //     }
    //   },
    //   [email, nickname, password, passwordCheck],
    // );
  };

  return (
    <Formik<{ name: string, phone: string }>
      initialValues={{ name, phone }}
      onSubmit={(values) => {
        setName(values.name);
        setPhone(values.phone);
        submitForm();
      }}
      validate={(values) => {
        const errors: { name?: string, phone?:string } = {};
        if (!values.name) errors.name = "Name is required";
        if(!values.phone) errors.phone = "Phone is required";
        return errors;
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
        <div className='contentWrap'>
          <div className='inputTitle'>이름</div>
          <div className='inputWrap'>
            <input 
                className='input'
                name="name"
                type="text" 
                value={values.name} 
                onChange={handleChange} 
                onBlur={handleBlur}
            />
          </div>
          <div className='inputTitle'>전화번호 입력</div>
          <div className='inputWrap'>
            <input 
                className='input'
                name="phone"
                type="tel" 
                value={values.phone} 
                onChange={handleChange} 
                onBlur={handleBlur}
            />
          </div>
          <Button className='centerButton' type="default" onClick={() => prev()}>
            Back
          </Button>
          <Button className='bottomButton' type="primary" onClick={() => handleSubmit()}>
            Register
          </Button>
        </div> 
      )}
    </Formik>
  );
};

export default NamePhoneStep;
