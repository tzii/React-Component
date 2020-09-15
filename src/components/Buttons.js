import React, { Component } from "react";
import Button from "./Button";
import "./Buttons.css";

export default class Buttons extends Component {
    render() {
        return (
            <>
                <h2>Buttons page</h2>
                <div className="btn-gallary">
                    <Button color="default">Default</Button>
                    <Button color="primary">Default</Button>
                    <Button color="secondary">Default</Button>
                    <Button color="danger">Default</Button>
                    <Button color="default" variant="outline">
                        Default
                    </Button>
                    <Button color="primary" variant="outline">
                        Default
                    </Button>
                    <Button color="secondary" variant="outline">
                        Default
                    </Button>
                    <Button color="danger" variant="outline">
                        Default
                    </Button>
                    <Button color="default" variant="text">
                        Default
                    </Button>
                    <Button color="primary" variant="text">
                        Default
                    </Button>
                    <Button color="secondary" variant="text">
                        Default
                    </Button>
                    <Button color="danger" variant="text">
                        Default
                    </Button>
                    <Button color="default" disableShadow>
                        Default
                    </Button>
                    <Button color="primary" disableShadow>
                        Default
                    </Button>
                    <Button color="secondary" disableShadow>
                        Default
                    </Button>
                    <Button color="danger" disableShadow>
                        Default
                    </Button>
                    <Button color="default" disabled>
                        Default
                    </Button>
                    <Button color="primary" disabled>
                        Default
                    </Button>
                    <Button color="secondary" disabled>
                        Default
                    </Button>
                    <Button color="danger" disabled>
                        Default
                    </Button>
                    <Button color="default" variant="text" disabled>
                        Default
                    </Button>
                    <Button color="primary" variant="text" disabled>
                        Default
                    </Button>
                    <Button color="secondary" variant="text" disabled>
                        Default
                    </Button>
                    <Button color="danger" variant="text" disabled>
                        Default
                    </Button>
                    <Button color="default" startIcon="local_grocery_store">
                        Default
                    </Button>
                    <Button color="primary" startIcon="local_grocery_store">
                        Default
                    </Button>
                    <Button color="secondary" startIcon="local_grocery_store">
                        Default
                    </Button>
                    <Button color="danger" startIcon="local_grocery_store">
                        Default
                    </Button>
                    <Button color="default" endIcon="local_grocery_store">
                        Default
                    </Button>
                    <Button color="primary" endIcon="local_grocery_store">
                        Default
                    </Button>
                    <Button color="secondary" endIcon="local_grocery_store">
                        Default
                    </Button>
                    <Button color="danger" endIcon="local_grocery_store">
                        Default
                    </Button>
                    <Button color="default" size="sm">
                        Default
                    </Button>
                    <Button color="primary" size="sm">
                        Default
                    </Button>
                    <Button color="secondary" size="sm">
                        Default
                    </Button>
                    <Button color="danger" size="sm">
                        Default
                    </Button>
                    <Button color="default" size="md">
                        Default
                    </Button>
                    <Button color="primary" size="md">
                        Default
                    </Button>
                    <Button color="secondary" size="md">
                        Default
                    </Button>
                    <Button color="danger" size="md">
                        Default
                    </Button>
                    <Button color="default" size="lg">
                        Default
                    </Button>
                    <Button color="primary" size="lg">
                        Default
                    </Button>
                    <Button color="secondary" size="lg">
                        Default
                    </Button>
                    <Button color="danger" size="lg">
                        Default
                    </Button>
                </div>
            </>
        );
    }
}
