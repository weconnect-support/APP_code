import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  width: 24rem;
  padding: 0.5rem;
  border-radius: 1rem;
  margin: 1rem;
  box-shadow: 0 5px 1rem 0 gray;
  li {
    list-style-type: none;
    margin: 0 0 10px 0;
  }
  ul {
    padding: 1rem 1rem 1rem 1rem;
    margin: 0;
  }
  .thumbNail {
    margin: 0 0.7rem 0 0;
    background-color: black;
    width: 100px;
    border-radius: 1rem;
  }
  .icon {
    font-size: 1.5rem;
    margin: 0 0 0 -10px;
  }
  #date {
    color: gray;
    font-size: 15px;
  }
  #title {
    font-weight: 1rem;
    font-size: 20px;
  }
  #category {
    color: gray;
  }
  #peopleNum {
    font-weight: bold;
  }
  #iconList {
    display: flex;
    margin-left: 10px;
  }
`;

export default Card;
