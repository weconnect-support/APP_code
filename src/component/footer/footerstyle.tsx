import styled from "styled-components";

const Navigation = styled.div`
  ul {
    display: flex;
    position: fixed;
    padding: 1rem 0 1rem 0;
    bottom: 0;
    width: 100%;
    margin: 0;
    height: 3rem;
    list-style-type: none;
    justify-content: space-around;
    align-items: center;
    border-top: solid 1px;
    background-color: white;
  }
  li{
    background-color: green;
    margin 0 2rem 0 2rem;
  }
  #icon{
    font-size:2rem;
  }
`;

export default Navigation;
