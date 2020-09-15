import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import $ from "jquery";

export default class Header extends Component {
    componentDidMount() {
        let href = window.location.href;
        $(
            `header ul>li>a[href="${
                "#" + href.substring(href.lastIndexOf("/"))
            }"]`
        ).addClass("active");
    }
    handleClick = (e) => {
        let href = window.location.href;
        $(
            `header ul>li>a[href="${
                "#" + href.substring(href.lastIndexOf("/"))
            }"]`
        ).removeClass("active");
        e.target.classList.add("active");
    };
    render() {
        return (
            <header>
                <div className="brand">
                    <Link to="/" onClick={this.handleClick}>
                        <span>Dev</span>Challenges.io
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to="/Colors" onClick={this.handleClick}>
                            Colors
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Typography"
                            className="123"
                            onClick={this.handleClick}
                        >
                            Typography
                        </Link>
                    </li>
                    <li>
                        <Link to="/Spaces" onClick={this.handleClick}>
                            Spaces
                        </Link>
                    </li>
                    <li>
                        <Link to="/Buttons" onClick={this.handleClick}>
                            Buttons
                        </Link>
                    </li>
                    <li>
                        <Link to="/Inputs" onClick={this.handleClick}>
                            Inputs
                        </Link>
                    </li>
                    <li>
                        <Link to="/Grid" onClick={this.handleClick}>
                            Grid
                        </Link>
                    </li>
                </ul>
            </header>
        );
    }
}
