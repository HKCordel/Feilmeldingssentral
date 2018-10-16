import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PostData } from './PostData';

export class Login extends Component {
    displayName = Login.name
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            redirect: false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    handleLogin() {
        if (this.state.email && this.state.password) {
            PostData('handleLogin', this.state).then((result) => {
                let responseJSON = result;
                if (responseJSON.userData) {
                    sessionStorage.setItem('userData', responseJSON);
                    this.setState({ redirect: true });
                }
                else {
                    console.log("Login error");
                }
            });

        }
 
        
    }
    onChange(e) {
      
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        if (this.state.redirect) {
            return (<Redirect to={'/Register'}/>)
        }
        return (
            <div className="form-inline">
                <h2>Login Page</h2>
                <div className="form-group">
                    <input

                        className="form-control"
                        type="text"
                        placeholder="email"
                        onChange={this.onChange}
                    />
                    <input
                            className="form-control"
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={this.onChange}
                    />
                    <button
                        className="btn btn-primary"
                        value="Login"
                        type="button"
                        onClick={this.handleLogin}
                    >
                        Logg inn
                        </button>
                </div>
            </div>
            )
            }
    }