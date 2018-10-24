import React, { Component } from 'react';

export class Home extends Component {
    displayName = Home.name

    constructor(props) {
        super(props);
        this.state = { users: [], loading: true, search: "" };


        fetch('http://192.168.2.8:3000/user_table')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data, loading: false });
            });


    }
    static renderUsersTable(users) {
        
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>User level</th>
                        <th>Id</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        <tr key={user.id}>
                            <td>{user.user_username}</td>
                            <td>{user.email}</td>
                            <td>{user.user_level}</td>
                            <td>{user.id}</td>
                            <td>{user.user_password}</td>

                        </tr>
                    )}
                </tbody>
            </table>
        );
     
    }

    onChange = e => {
        this.setState({ search: e.target.value });
    }


    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderUsersTable(this.state.users);

        return (
            <div>
                <input label="Search.." onChange={this.onChange} />
                <h1>Administrator dashboard </h1>
                
                {contents}
            </div>
        );
    }
}