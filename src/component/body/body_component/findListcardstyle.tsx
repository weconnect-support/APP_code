import styled from "styled-components";

const Card = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: white;
  padding: 0.5rem;
  border-radius: 1rem;
  margin: 0.1rem 0 0.1rem 0;
  li {
    list-style-type: none;
    margin: 0 0 0.88rem 0;
    width: 100%;
  }
  ul {
    width: 50%;
    padding: 1rem 1rem 1rem 1rem;
    margin: 0;
  }
  .thumbNail {
    background-color: black;
    width: 35%;
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
  #explain {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default Card;
