import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";
import Footer from "../common/footer/Footer";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/Ourship-id/" component={Home} />
          <Route exact path="/Ourship-id/about" component={About} />
          <Route exact path="/Ourship-id/blog" component={Blog} />
          <Route exact path="/Ourship-id/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
