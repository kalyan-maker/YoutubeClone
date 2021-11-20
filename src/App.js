import React, { useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap"; //import Container from react-bootstrap
import Header from "./components/Header/Header"; //imported Header from Header
import Sidebar from "./components/Sidebar/Sidebar"; //imported Sidebar from sidebar
import HomeScreen from "./Screen/HomeScreen/HomeScreen"; //imported HomeScreen from HomeScreen

import "bootstrap/dist/css/bootstrap.min.css"; //imported bootstrap css
import LoginScreen from "./Screen/LoginScreen/LoginScreen"; //imported Login screen

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom"; //custom import from react router dom

//create Layout function
const Layout = ({ children }) => {
  //mobile responsive handburger menu
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
};
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path="/auth">
          <LoginScreen />
        </Route>
        <Route path="/search">
          <Layout>
            <h1>search</h1>
          </Layout>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
