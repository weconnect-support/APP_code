import styled from "styled-components";

const Body_Signup = styled.div`
    .page{
        margin-left: 5%;
        margin-right: 5%;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        position: relative;
        background-color: #f2f2f2;
        height: 80vh;
    }
    .titleWrap{
        margin-top: 1rem;
        font-size: 26px;
        font-weight: 700;
    }
    .contentWrap {
        margin-top: 1rem;
        flex: 1;
    }
    .inputTitle {
        margin-top: 1rem;
        font-size: 12px;
        font-weight: 600;
        color: #262626;
    }
    .inputWrap {
        display: flex;
        border-radius: 1rem;
        padding: 1rem;
        margin-top: 1rem;
        background-color: white;
        border: 1px solid #e2e0e0;
    }
    .inputWrap:focus-within {
        border: 1px solid #FF4471;
    }
    
    .input {
        width: 100%;
        outline: none;
        border: none;
        height: 1rem;
        font-size: 14px;
        font-weight: 400;
    }
    
    .input::placeholder {
        color: #dadada;
    }
    
    .centerButton {
        margin-top: 1rem;
        width: 100%;
        height: 3rem;
        border: none;
        font-weight: bold;
        border-radius: 64px;
        background-color: white;
        color: black;
        cursor: pointer;
    }

    .bottomButton {
        margin-top: 0.5rem;
        width: 100%;
        height: 3rem;
        border: none;
        font-weight: bold;
        border-radius: 64px;
        background-color: #FF4471;
        color: white;
        cursor: pointer;
    }
    .ant-steps-item{
        flex-direction: row;
    }
    .ant-steps-item-active > .ant-steps-item-container > .ant-steps-item-icon{
        background-color: #FF4471;
        border: none;
    }
    .ant-steps {
        flex-direction: row;
    }
      
    @media (max-width: 768px) {
        .ant-steps {
            flex-direction:row;
        }
        .ant-steps-item-title{
            display:none;
        }
        // .ant-steps{
        //     flex-direction: column;
        // }
        // .steps-container{
        //     display: flex;
        //     justify-content: center;
        // }          
    }
    
`;

export { Body_Signup };