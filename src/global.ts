import { createGlobalStyle } from "styled-components";
import GmarkBold from "./fonts/GmarketSansTTFBold.ttf";
import GmarkLight from "./fonts/GmarketSansTTFLight.ttf";
import GmarkMedium from "./fonts/GmarketSansTTFMedium.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: 'GmarketSansTTFBold';
        src: local('GmarketSansTTFBold'), local('GmarketSansTTFBold');
        font-style: normal;
        src: url(${GmarkBold}) format('truetype');
  }
  @font-face {
        font-family: 'GmarketSansTTFMedium';
        src: local('GmarketSansTTFMedium'), local('GmarketSansTTFMedium');
        font-style: normal;
        src: url(${GmarkMedium}) format('truetype');
  }
  @font-face {
        font-family: 'GmarketSansTTFLight';
        src: local('GmarketSansTTFLight'), local('GmarketSansTTFLight');
        font-style: normal;
        src: url(${GmarkLight}) format('truetype');
  }`;

export default GlobalStyle;
