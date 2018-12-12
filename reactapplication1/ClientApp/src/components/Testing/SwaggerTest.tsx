import React, { Component } from "react";
// import axios from 'axios';

export class SwaggerTest extends Component<{},{
            username: string,
            password: string,
            email: string,
            user_level: string,
}> {
    public displayName = SwaggerTest.name;

    constructor(props) {
        super(props);
        this.onAddUserame = this.onAddUserame.bind(this);
        this.onAddPassword = this.onAddPassword.bind(this);
        this.onAddEmail = this.onAddEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            password: "",
            email: "",
            user_level: "0",

        };
    }
    public onAddUserame(e) {
        this.setState({
            username: e.target.value,
        });
    }
    public onAddPassword(e) {
        this.setState({
            password: e.target.value,
        });
    }
    public onAddEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }
    public onSubmit(e) {
        e.preventDefault();
        const serverport = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,

        };
        fetch("http://192.168.2.8:3000/user_table/", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(serverport),
        })
            .then((response) => {
                return response.json();

            // tslint:disable-next-line:no-console
            }).then((res) => console.log(res.serverport));
        // axios.post(' http://192.168.2.8:3000/user_table/', serverport)

        this.setState({
            username: "",
            password: "",
            email: "",
        });
    }

    public render() {
        return (
            <div style={{ marginTop: 50 }}>
                <h3>Add New user</h3>
                <form>
                    <div className="form-group">
                        <label>Add username:  </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add password </label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add email:  </label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add new user" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}
