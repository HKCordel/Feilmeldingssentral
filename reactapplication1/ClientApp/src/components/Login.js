import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { createBlogPost } from './PostData';



export class Login extends Component {

    state = {
        username: "",
        password: "",
    }

    onSubmit = e => {
        e.preventDefault();
        console.log("Not finished yet");
    }
    render() {
        return (
            <div>
            <form onSubmit={this.onSubmit}>
                <fieldset>
                    <legend>Login</legend>
                    <p>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text" id="username"
                            onChange={e => this.setState({ username: e.target.value })} />
                    </p>
                    <p>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password" id="password"
                            onChange={e => this.setState({ password: e.target.value })} />
                    </p>
                    <p>
                            <button className="btn btn-primary" type="submit">Login</button>
                    </p>

                    <p>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </fieldset>
                </form>
              
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);