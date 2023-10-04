import styled from "styled-components";

const Body_Main = styled.div`
  padding: 0 0 1rem 0;

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  h2 {
    margin-left: 1rem;
    font-weight: 600;
    margin: 1rem 0 1rem 1rem;
  }

  .findvolunteer {
    margin: 1rem 0 0 0;
    display: flex;
    justify-content: space-between;
  }
  .findvolunteer div {
    margin: 0 1rem 0 1rem;
  }

  .findCardList {
    display: grid !important;
    grid-template-rows: auto;
    grid-auto-flow: column;
    white-space: nowrap;
    overflow-x: scroll;
    padding: 0 0 1rem 0;
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
    margin: 1rem auto;
    height: 10rem;
    width: 95%;
    background-color: #bdbdbd;
  }
  .searchCategory h5 {
    color: gray;
  }

  .findLocationList {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 1rem 0 1.5rem;
    padding: 1rem 0 1rem 0;
    overflow: auto;
    white-space: nowrap;
  }
  .findLocationList p {
    margin: 0.5rem 0.5rem 0.5rem 0;
  }
  .currentLocation {
    display: flex;
  }
  #categoryImg {
    height: 80%;
    width: 20%;
    margin: 0 0 0 1rem;
    background-color: black;
  }

  .findOtherLocation {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    width: 80%;
    margin: 2rem auto 5rem auto;
    background-color: white;
    height: 4rem;
  }
  .findOtherLocation p {
    margin: 0 2rem 0 2rem;
    font-weight: 600;
    font-size: 1.2rem;
  }
`;
const Card_List = styled.div``;

export { Body_Main, Card_List };
