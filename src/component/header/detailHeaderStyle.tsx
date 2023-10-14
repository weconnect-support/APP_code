import styled from "styled-components";

const DetailHeaderBox = styled.div<{
  isVisible: boolean;
  windowWidth: number;
}>`
  @import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: transparent;
  z-index: 100;

  .backBtn {
    font-size: 1.8rem;
    padding: 1rem;
    cursor: pointer;
  }

  .extra {
    padding: 1rem;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export default DetailHeaderBox;
