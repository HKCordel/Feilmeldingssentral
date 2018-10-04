import React, { Component } from 'react';
export class Login extends Component {
    displayName = Login.name
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        return (
            <div className="form-inline">
                <h2>Sign in</h2>
                <div className="form-group">
                    <input

                        className="form-control"
                        type="text"
                        placeholder="email"
                        onChange={item => this.setState({ email: item.email })}
                    />
                    <input
                            className="form-control"
                            type="password"
                        placeholder="pasword"
                        onChange={item => this.setState({ password: item.password })}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                    >
                        Logg inn
                        </button>
                </div>
            </div>
            )
            }
    }