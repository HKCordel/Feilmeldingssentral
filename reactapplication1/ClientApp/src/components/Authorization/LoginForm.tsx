import React, { Component } from "react";

class Login extends Component<
        {
            onLoginClick: (event: any) => any,
        }, any> {

    constructor(props: any) {
        super(props);
        this.state = {username: "", password: ""};
    }

    public render() {
        return (
            <div>
                <input type="text"
                       name={"username"}
                       value={this.state.username}
                       onChange={this.handleChange}
                       className="form-control"
                       placeholder="Username" />
                <input type="password"
                       name={"password"}
                       value={this.state["password"]}
                       onChange={this.handleChange}
                       className="form-control"
                       placeholder="Password" />
                <button onClick={this.handleSubmit} className="btn btn-primary">
                    Login
                </button>
            </div>
        );
    }

    public handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        this.setState({[target.name]: target.value});
    }

    public handleSubmit = () => {
        const creds = { username: this.state["username"].trim(), password: this.state["password"].trim() };
        this.props.onLoginClick(creds);
    }
}

export default Login;
