import Body_Detail from "./userDetail_Style";

interface propsType {
  idx: string;
}

function Detail_Body({ idx }: propsType) {
  console.log("this page:" + idx);

  return <Body_Detail></Body_Detail>;
}

export default Detail_Body;
