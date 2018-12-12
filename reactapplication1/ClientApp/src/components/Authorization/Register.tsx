﻿import React, { Component } from "react";

export class Register extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
        };
    }
    public render() {
        return (
            <div className="form-inline" style={{ margin: "5%" }}>
                <h2>Sign up</h2>
                <div className="form-group">
                    <input

                        className="form-control"
                        type="text"
                        style={{ marginRight: "5px" }}
                        placeholder="name"
                        onChange={(event) => this.setState({ name: event.target.value })}
                    />
                    <input

                        className="form-control"
                        type="text"
                        style={{marginRight: "5px"}}
                        placeholder="email"
                        onChange={(event) => this.setState({ email: event.target.value })}
                    />
                    <input
                        className="form-control"
                        type="password"
                        style={{ marginRight: "5px" }}
                        placeholder="pasword"
                        onChange={(event) => this.setState({ password: event.target.value })}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                    >
                        Registrer
                        </button>
                </div>
            </div>

        );
    }
}
