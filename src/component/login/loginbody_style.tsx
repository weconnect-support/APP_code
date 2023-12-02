import styled from "styled-components";

const Body_Login = styled.div`
  background-color: #f2f2f2;
  padding-bottom: 6rem;
  height: 100%;
  overflow: scroll;
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

  .signupContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .line {
    margin-left: 1rem;
    margin-right: 1rem;
    flex-grow: 1; /* 가능한 많은 공간 차지 */
    height: 1px;
    background: #000;
  }
  .goToSignup {
    width: fit;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 1.5rem;
    position: relative;
    text-decoration: underline;
    cursor: pointer;
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
