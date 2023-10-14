import styled from "styled-components";

const VolDetail_Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
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
    margin: -5rem 0 0 0;
    background-color: red;
    width: 100%;
    height: 40vh;
  }
  .info {
    width: 90%;
    padding: 1rem 1rem 2rem 1rem;
    border-bottom: 0.1rem solid gray;
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
    border-bottom: 0.1rem solid gray;
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
    margin: 2rem 0 1rem 0;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export default VolDetail_Body;
