import React, { Component } from "react";
import "./Inputs.css";
import Input from "./Input";

export default class Inputs extends Component {
    render() {
        return (
            <>
                <h2>Inputs page</h2>
                <div className="input-gallery">
                    <div className="row">
                        <div className="code">&lt;Input /&gt;</div>
                        <Input />
                    </div>
                    <div className="row">
                        <div className="code">&lt;Input error /&gt;</div>
                        <Input error />
                    </div>
                    <div className="row">
                        <div className="code">&lt;Input disabled /&gt;</div>
                        <Input disabled />
                    </div>
                    <div className="row">
                        <div className="code">
                            &lt;Input helperText="Some interesting text" /&gt;
                        </div>
                        <Input helperText="Some interesting text" />
                    </div>
                    <div className="row">
                        <div className="code">
                            &lt;Input helperText="Some interesting text" error
                            /&gt;
                        </div>
                        <Input helperText="Some interesting text" error />
                    </div>
                    <div className="row">
                        <div className="code">
                            &lt;Input startIcon="call" /&gt;
                        </div>
                        <Input startIcon="call" />
                    </div>
                    <div className="row">
                        <div className="code">
                            &lt;Input endIcon="call" /&gt;
                        </div>
                        <Input endIcon="call" />
                    </div>
                    <div className="row">
                        <div className="code">&lt;Input size="sm" /&gt;</div>
                        <Input size="sm" />
                    </div>
                    <div className="row">
                        <div className="code">&lt;Input size="md" /&gt;</div>
                        <Input size="md" />
                    </div>
                    <div className="row">
                        <div className="code">&lt;Input size="lg" /&gt;</div>
                        <Input size="lg" />
                    </div>
                    <div className="row">
                        <div className="code">&lt;Input fullWith /&gt;</div>
                        <Input fullWith />
                    </div>
                    <div className="row">
                        <div className="code">
                            &lt;Input multiline row="4" /&gt;
                        </div>
                        <Input multiline row="4" />
                    </div>
                </div>
            </>
        );
    }
}
