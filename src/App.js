import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Pages/routes";
import { GlobalStyle } from "./Global/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
