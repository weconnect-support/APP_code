import styled from "styled-components";

const Body_Main = styled.div`
  h2 {
    margin-left: 1rem;
  }

  .findCardList {
    display: grid !important;
    grid-template-rows: auto;
    grid-auto-flow: column;
  }
  .findPeople {
    display: flex;
    justify-content: space-between;
  }
  .findPeople div {
    margin: 0 1rem 0 1rem;
  }
  .searchCategory {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    margin: 0 auto;
    height: 10rem;
    width: 95%;
    background-color: #bdbdbd;
  }
  .searchCategory h5 {
    color: gray;
  }
  #categoryImg {
    height: 80%;
    width: 20%;
    margin: 0 0 0 1rem;
    background-color: black;
  }
`;
const Card_List = styled.div``;

export { Body_Main, Card_List };
