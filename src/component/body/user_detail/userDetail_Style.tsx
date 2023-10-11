import styled from "styled-components";

const Body_Detail = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    flex-direction: column;
    padding: 3rem 2rem 5rem 2rem;

    .titleWrap{
        margin-top: 1rem;
        font-size: 26px;
        font-weight: 700;
    }

    .form-label{
        padding:1rem;
        font-size: 12px;
        font-weight: 600;
        color: #262626;
    }

    .inputWrap {
        display: flex;
        border-radius: 1rem;
        padding: 1rem;
        margin-bottom: 1rem;
        margin-top:0.5rem;
        background-color: white;
        border: 1px solid #e2e2e2;      
    }
    .inputWrap.disabled .input {
        background-color: #e2e2e2;
    }
    .inputWrap.disabled{
        background-color: #e2e2e2;
    }
    .inputWrap:focus-within {
        border: 1px solid #FF4471;
    }
    
    .input{
        width: 100%;
        outline: none;
        border: none;
        height: 1rem;
        font-size: 14px;
        font-weight: 400;
    }

    .bottomButton {
        margin-top: 1rem;
        width: 100%;
        height: 3rem;
        border: none;
        font-weight: bold;
        border-radius: 64px;
        background-color: #FF4471;
        color: white;
        cursor: pointer;
    }
    .delButton{
        margin-top: 0.5rem;
        width: 100%;
        height: 3rem;
        border: none;
        font-weight: bold;
        border-radius: 64px;
        background-color: #e2e2e2;
        color: black;
        cursor: pointer;
    }

`;

export default Body_Detail;
