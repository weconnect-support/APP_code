import React from "react";
import Main from "./layout/main";
import { Reset } from "styled-reset";
import { Stack } from "@mui/material";
function App() {
  return (
    <Stack
      flex={1}
      sx={{ overflowY: "auto", touchAction: "none", userSelect: "none" }}
    >
      <Reset />
      <Main />
    </Stack>
  );
}

export default App;
