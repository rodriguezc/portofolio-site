import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import ContactPage from "../components/ContactPage";
import PortofolioPage from "../components/PortofolioPage";
import PortofolioItemPage from "../components/PortofolioItemPage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/portofolio" exact={true} component={PortofolioPage} />
        <Route path="/portofolio/:id" component={PortofolioItemPage} />
        <Route path="/contact" exact={true} component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
