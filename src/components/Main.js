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
                    <Route exact path="/Button-Component">
                        Home
                    </Route>
                    <Route path="/Button-Component/Colors">
                        <Colors />
                    </Route>
                    <Route path="/Button-Component/Typography">
                        <Typography />
                    </Route>
                    <Route path="/Button-Component/Spaces">
                        <Spaces />
                    </Route>
                    <Route path="/Button-Component/Buttons">
                        <Buttons />
                    </Route>
                    <Route path="/Button-Component/Inputs">
                        <Inputs />
                    </Route>
                    <Route path="/Button-Component/Grid">
                        <Grid />
                    </Route>
                </Switch>
            </main>
        );
    }
}
