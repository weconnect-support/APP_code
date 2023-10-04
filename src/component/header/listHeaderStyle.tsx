import styled from "styled-components";

const ListHeaderBox = styled.div<{ isVisible: boolean; windowWidth: number }>`
  @import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;

  p{
    font-weight:600;
  }

  .backBtn {
    font-size: 1.8rem;
    padding: 1rem 1rem;
    cursor: pointer; 
  }
  .searchIcon {
    margin: 0 0 0 0.5rem;
  }
  .userIcon {
    font-size: 1.5rem;
    padding: 1rem 0.5rem;
  }
  }

  .alarmBell {
    padding: 0 1.5rem 0 0;
  }
  .user {
    padding: 0 0.5rem 0 0;
    cursor: pointer;
  }

  #login_text {
    border-right: 2px solid black;
  }

`;

export default ListHeaderBox;
