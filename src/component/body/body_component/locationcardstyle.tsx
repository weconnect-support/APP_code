import styled from "styled-components";

const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 25rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0 2px 0.8rem 0 gray;
  margin: 0 1rem 0 1rem;
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
    margin: 0.7rem 1rem 0 1rem;
  }
  #thumb {
    height: 13rem;
    background-color: black;
    border-radius: 1rem;
    position: relative;
  }
  #kilometer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 4rem;
    background-color: gray;
    border-radius: 3rem;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
  #date {
    font-weight: 600;
    color: gray;
  }
  #title {
    font-weight: 600;
    font-size: 1.2rem;
  }
  #category {
    font-size: 0.85rem;
    color: gray;
    font-weight: 500;
  }
  #peopleNum {
    font-size: 0.9rem;
  }
  #iconMargin {
    margin: 0.7 0 0 1.3rem;
  }
  .icon {
    font-size: 1.5rem;
    margin: 0 0 0 -0.3rem;
  }
`;

export default Card2;
