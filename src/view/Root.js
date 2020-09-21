import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Hotel from "./Hotel";
import Contact from "./Contact";
import Events from "./Events";
import Header from "../components/Header";
import GlobalStyle from "../Theme/GlobalStyle";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import The404Page from "./The404Page";
import {AuthProvider} from "../Firebase/Auth";
import Login from "./Login";


const Root = ()=> {
      return (

            <AuthProvider>
                  <BrowserRouter>
                      <>
                          <ScrollToTop />
                          <GlobalStyle/>
                          <Header />
                          <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/Menu" component={Menu} />
                                <Route exact path="/Hotel" component={Hotel} />
                                <Route exact path="/Imprezy" component={Events} />
                                <Route exact path="/Kontakt" component={Contact} />
                                <Route exact path="/Login" component={Login} />
                                <Route component={The404Page}/>
                          </Switch>
                          <Footer />
                     </>
                  </BrowserRouter>
            </AuthProvider>
      );
  }


export default Root;
