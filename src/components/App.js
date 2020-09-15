import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { HashRouter } from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Header />
                <Main />
                <Footer />
            </HashRouter>
        );
    }
}
