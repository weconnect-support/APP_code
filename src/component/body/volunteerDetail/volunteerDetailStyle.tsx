import styled from "styled-components";

const VolDetail_Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
  overflow: scroll;

  .header {
    width: 100%;
    margin: 1rem 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    background-color: transparent;
    z-index: 1;
  }
  .disabled {
    display: none;
  }

  .backBtn {
    font-size: 1.8rem;
    padding: 1rem;
    cursor: pointer;
  }

  .extra {
    padding: 1rem;
    font-size: 1.8rem;
    cursor: pointer;
  }
  #image {
    margin: 0.2rem 0 0 0;
    background-color: white;
    width: 100%;
    height: 40vh;
  }
  .info {
    width: 90%;
    padding: 1rem 1rem 2rem 1rem;
    border-bottom: 0.1rem solid #d5d5d5;
  }
  #address {
    margin: 1rem 0 1rem 0;
    font-size: 1rem;
    color: gray;
    font-weight: 500;
  }
  #title {
    font-size: 1.3rem;
    font-weight: 600;
    margin: 1rem 0 1rem 0;
  }
  #date {
    font-weight: 600;
    color: gray;
    margin: 1rem 0;
  }
  #category {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: gray;
    font-weight: 600;
  }
  #categoryTag {
    color: black;
    font-weight: 600;
  }
  .explain {
    width: 90%;
    padding: 1rem;
    border-bottom: 0.1rem solid #d5d5d5;
  }
  .explain div {
    color: gray;
    font-weight: 600;
    margin: 1rem 0 1rem 0;
  }
  #detail {
    color: black;
    margin: 1rem 0 2rem 0;
  }
  .comment {
    width: 90%;
  }
  .comment p {
    margin: 1rem 0 1rem 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
  #enterComment {
    margin: 2rem 0 1.5rem 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  #enterCommentBtn {
    font-size: 2rem;
  }
  #enterArea {
    width: 80%;
    font-size: 1.2rem;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 2px;
    &:focus{
      outline: none;
      box-shadow: none ;
  }
  
`;

export default VolDetail_Body;
