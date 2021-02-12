import React, { useEffect } from "react";
//components and pages
import Nav from "./components/Nav";
import Home from "./pages/Home";
//Styles
import GlobalStyles from "./components/GlobalStyles";
//Routes
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
