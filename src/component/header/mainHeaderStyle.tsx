import styled from "styled-components";

const Headerbox = styled.div<{ isVisible: boolean; windowWidth: number }>`
  @import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  position: relative; /* 부모 컨테이너에 relative 설정 */

  .headerMenuList {
    margin-top: auto;
    margin-bottom: auto;
    list-style: none;
    display: flex;
  }

  li {
    padding: 0 1rem 0 1rem;
  }

  .loGo {
    width: ${(props) =>
      props.windowWidth <= 768 ? null : "65%"}; /* 동적으로 너비 설정 */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.5rem;
    padding: 1rem 1rem;
    cursor: pointer;
  }
  .searchIcon {
    margin: 0 0 0 0.5rem;
  }
  .userIcon {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  .inputBar {
    width: ${(props) =>
      props.windowWidth <= 768 ? null : "100%"}; /* 동적으로 너비 설정 */
    height: 2.5rem;
    font-size: inherit;
    padding: 0 1rem 0 1rem;
    margin: 0 0 0 2rem;
    border-radius: 30px;
    border: none;
    border: 1.3px solid #f2f2f2;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #input {
    width: ${(props) => (props.windowWidth <= 768 ? null : "100%")};
    padding: 0.4rem 0 0.4rem 0;
    border: none;
    outline: 0;
  }

  .alarmBell {
    padding: 0 2rem 0 0;
  }
  .user {
    padding: 0 1rem 0 0;
    cursor: pointer;
  }

  #login_text {
    border-right: 2px solid black;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;

    .headerMenuList {
      position: absolute;
      top: 100%;
      right: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 30%;
      background-color: white;
      display: ${(props) => (props.isVisible ? "flex" : "none")};
    }

    .inputBar {
      display: none;
    }
    .headerMenuList li {
      margin: 1rem 2rem 1rem 0;
      padding: 0;
      color: black;
    }
    .loGo {
      display: block;
    }
    .userIcon {
      display: block;
    }
  }
`;

export default Headerbox;
