import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.8rem 1rem 0.8rem 1rem;
  margin: 1rem auto;
  width: 90%;
  height: 5rem;
  border: 0.1rem solid #d5d5d5;
  border-radius: 1rem;

  #comment {
    margin: 0 0 0 0.5rem;
    font-size: 1.4rem;
  }
  .user {
    margin: 0.7rem 0 0.7rem 0;
    display: flex;
  }
  #thumnail {
    margin: 0 0.3rem 0 0.5rem;
  }
  #userName {
    font-size: 0.9rem;
    font-weight: 500;
  }
  #createDate {
    margin: 0 0 0 0.5rem;
    font-size: 0.8rem;
    color: gray;
  }
`;

export default Card;
