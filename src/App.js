import React from "react";
import {Container} from "@mui/material";
import Header from "./components/Header";

const App = () => {
  return (
    <Container>
        <Header />
        <input type="color" />
    </Container>
  );
}

export default React.memo(App);
