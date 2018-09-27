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
                <h2>Innlogging</h2>
                <div className="form-group">
                    <input

                        className="form-control"
                        type="text"
                        placeholder="email"
                        onChange={event => this.setState({ email: event.target.value })}
                    />
                    <input
                            className="form-control"
                            type="password"
                            placeholder="pasword"
                            onChange={event => this.setState({ password: event.target.value })}
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