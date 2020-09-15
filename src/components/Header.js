import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import $ from "jquery";

export default class Header extends Component {
    componentDidMount() {
        $(`header ul>li>a[href="${window.location.pathname}"]`).addClass(
            "active"
        );
    }
    handleClick = (e) => {
        $(`header ul>li>a[href="${window.location.pathname}"]`).removeClass(
            "active"
        );
        e.target.classList.add("active");
    };
    render() {
        return (
            <header>
                <div className="brand">
                    <Link to="/Button-Component" onClick={this.handleClick}>
                        <span>Dev</span>Challenges.io
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link
                            to="/Button-Component/Colors"
                            onClick={this.handleClick}
                        >
                            Colors
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Button-Component/Typography"
                            className="123"
                            onClick={this.handleClick}
                        >
                            Typography
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Button-Component/Spaces"
                            onClick={this.handleClick}
                        >
                            Spaces
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Button-Component/Buttons"
                            onClick={this.handleClick}
                        >
                            Buttons
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Button-Component/Inputs"
                            onClick={this.handleClick}
                        >
                            Inputs
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Button-Component/Grid"
                            onClick={this.handleClick}
                        >
                            Grid
                        </Link>
                    </li>
                </ul>
            </header>
        );
    }
}
