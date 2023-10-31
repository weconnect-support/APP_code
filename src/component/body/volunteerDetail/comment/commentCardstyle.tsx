import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.8rem 1rem 0.8rem 1rem;
  margin: 1rem auto;
  width: 90%;
  border: 0.1rem solid #d5d5d5;
  border-radius: 1rem;

  #comment {
    margin: 0.5rem 0 0.5rem 0.5rem;
    font-size: 1.3rem;
    word-wrap: break-word;
  }
  .user {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    display: flex;
  }
  #thumnail {
    font-size: 1.5rem;
    margin: 0 0.3rem 0 0.5rem;
  }
  #userName {
    width: 3rem;
    display: flex;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 500;
  }

  #createDate {
    width: 70%;
    margin: 0 0 0 0.5rem;
    font-size: 0.8rem;
    color: gray;
  }
  #extra {
    font-size: 1.3rem;
    margin-right: 0.7rem;
    margin-left: auto;
  }
`;
