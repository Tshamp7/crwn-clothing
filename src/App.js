import React from "react";
import HomePage from "./pages/homepage/homepage.component.jsx";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
