import styled from "styled-components";

const Participate = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0;
  height: 4rem;
  list-style-type: none;
  justify-content: space-around;
  align-items: center;
  border-top: solid 1px;
  background-color: red;

  .hidden {
    display: none;
  }
  .makerFooter {
    background-color: skyblue;
    width: 50%;
    height: 100%;
  }
`;

export default Participate;
