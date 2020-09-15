import React, { Component } from "react";
import "./Main.css";
import { Switch, Route } from "react-router-dom";
import Colors from "./Colors";
import Typography from "./Typography";
import Spaces from "./Spaces";
import Buttons from "./Buttons";
import Inputs from "./Inputs.js";
import Grid from "./Grid";

export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/">
                        Home
                    </Route>
                    <Route path="/Colors">
                        <Colors />
                    </Route>
                    <Route path="/Typography">
                        <Typography />
                    </Route>
                    <Route path="/Spaces">
                        <Spaces />
                    </Route>
                    <Route path="/Buttons">
                        <Buttons />
                    </Route>
                    <Route path="/Inputs">
                        <Inputs />
                    </Route>
                    <Route path="/Grid">
                        <Grid />
                    </Route>
                </Switch>
            </main>
        );
    }
}
