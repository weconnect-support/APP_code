import React from "react";
import Main from "./layout/main";
import { Reset } from "styled-reset";
import { Stack } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Login from "./layout/login";
import Signup from "./layout/signup";
import RedirectNaver from "./component/login/Redirect_naver";
import List from "./layout/List";
import UserDetail from "./layout/userDetail";
import Register from "./layout/register";
import VolDetail from "./layout/volunteerDetail";
import VolunteerEdit from "./layout/volunteerEdit";
import WishList from "./layout/wishList";
import GlobalStyle from './App_style';
import Calendar from "./layout/calendar";

function App() {
  return (
    <Stack
      flex={1}
      sx={{ overflowY: "auto", touchAction: "none", userSelect: "none" }}
    >
      <Reset />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/naver" element={<RedirectNaver />}></Route>
        <Route path="/detail/:idx" element={<UserDetail />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/volunteer/:idx" element={<VolDetail />}></Route>
        <Route path="/volunteer/:idx/edit" element={<VolunteerEdit />}></Route>
        <Route path="/volunteer/wishList" element={<WishList/>}></Route>
        <Route path="/calendar" element={<Calendar/>}></Route>
      </Routes>
    </Stack>
  );
}

export default App;
