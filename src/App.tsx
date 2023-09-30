import React from "react";
import Main from "./layout/main";
import { Reset } from "styled-reset";
import { Stack } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./layout/login";
import RedirectNaver from "./component/login/Redirect_naver";
import RedirectKakao from "./component/login/Redirect_kakao";
import List from "./layout/List";

function App() {
  return (
    <Stack
      flex={1}
      sx={{ overflowY: "auto", touchAction: "none", userSelect: "none" }}
    >
      <Reset />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/naver" element={<RedirectNaver />}></Route>
        <Route path="/kakao" element={<RedirectKakao />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </Stack>
  );
}

export default App;
