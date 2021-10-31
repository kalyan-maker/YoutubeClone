import React, { useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";

import "bootstrap/dist/css/bootstrap.min.css"; //imported bootstrap css

function App() {
  //mobile responsive handburger menu
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <div className="App">
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main">
          <HomeScreen />
        </Container>
      </div>
    </div>
  );
}

export default App;
