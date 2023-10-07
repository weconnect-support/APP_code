import styled from "styled-components";

const Body_Login = styled.div`
  padding-bottom: 1rem;
  .page {
    margin-left: 10%;
    margin-right: 10%;
    width: flex;
    padding: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .titleWrap {
    margin-top: 50px;
    font-size: 26px;
    font-weight: 700;
  }
  .contentWrap {
    margin-top: 26px;
    flex: 1;
  }
  .inputTitle {
    font-size: 12px;
    font-weight: 600;
    color: #262626;
  }
  .inputWrap {
    display: flex;
    border-radius: 8px;
    padding: 16px;
    margin-top: 8px;
    background-color: white;
    border: 1px solid #e2e0e0;
  }
  .inputWrap:focus-within {
    border: 1px solid #ff4471;
  }

  .input {
    width: 100%;
    outline: none;
    border: none;
    height: 17px;
    font-size: 14px;
    font-weight: 400;
  }

  .input::placeholder {
    color: #dadada;
  }

  .bottomButton {
    width: 100%;
    height: 48px;
    border: none;
    font-weight: bold;
    border-radius: 64px;
    background-color: #ff4471;
    color: white;
    margin-bottom: 16px;
    cursor: pointer;
  }
  .socialLogin {
    display: flex;
    justify-content: center;
  }
`;

export { Body_Login };
