import React, { Component } from "react";
import Button from "./Button";
import "./Buttons.css";

export default class Buttons extends Component {
    render() {
        return (
            <>
                <h2>Buttons page</h2>
                <div className="btn-gallary">
                    <div className="content">
                        <div className="code">
                            &lt;Button color="default"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="default">Default</Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="primary"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="primary">Default</Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button
                            color="secondary"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="secondary">Default</Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="danger"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="danger">Default</Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="default"
                            variant="text"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="default" variant="text">
                            Default
                        </Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="primary"
                            variant="text"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="primary" variant="text">
                            Default
                        </Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="secondary"
                            variant="outline"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="secondary" variant="outline">
                            Default
                        </Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="danger"
                            variant="outline"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="danger" variant="outline">
                            Default
                        </Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="default"
                            disableShadow&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="default" disableShadow>
                            Default
                        </Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="primary"
                            disableShadow&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="primary" disableShadow>
                            Default
                        </Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="secondary"
                            disabled&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="secondary" disabled>
                            Default
                        </Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="danger"
                            disabled&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="danger" disabled>
                            Default
                        </Button>
                    </div>
                    <div
                        className="content"
                        style={{ "grid-column": "span 2" }}
                    >
                        <div className="code">
                            &lt;Button color="default" variant="text"
                            disabled&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="default" variant="text" disabled>
                            Default
                        </Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color=" color="secondary" "
                            startIcon="local_grocery_store"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button
                            color="secondary"
                            startIcon="local_grocery_store"
                        >
                            Default
                        </Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="danger"
                            startIcon="local_grocery_store"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="danger" startIcon="local_grocery_store">
                            Default
                        </Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="default"
                            endIcon="local_grocery_store"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="default" endIcon="local_grocery_store">
                            Default
                        </Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="primary"
                            endIcon="local_grocery_store"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="primary" endIcon="local_grocery_store">
                            Default
                        </Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="secondary"
                            size="sm"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="secondary" size="sm">
                            Default
                        </Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="danger"
                            size="sm"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="danger" size="sm">
                            Default
                        </Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="default"
                            size="md"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="default" size="md">
                            Default
                        </Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="default"
                            size="md"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="primary" size="md">
                            Default
                        </Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="secondary"
                            size="lg"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="secondary" size="lg">
                            Default
                        </Button>
                    </div>
                    <div className="content">
                        <div className="code">
                            &lt;Button color="danger"
                            size="lg"&gt;Default&lt;/Button&gt;
                        </div>
                        <Button color="danger" size="lg">
                            Default
                        </Button>
                    </div>
                </div>
            </>
        );
    }
}
