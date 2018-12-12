import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

export class Home extends Component<{}, {users: string[][], loading: boolean}> {

    constructor(props: any) {
        super(props);
        this.state = { users: [], loading: true};
    }
        public componentDidMount() {

            const url = "http://192.168.2.8:3000";
            fetch(url + "/user_table", {
                method: "GET",
            }).then((response) => response.json())
                .then((data) => {
                    this.setState({ users: data, loading: false });
                });
        }

    public changeState(id: string) {
        const index = this.state.users.findIndex((user: any) => {
            return user["id"] === id;
        });
    }

    public render() {

        const columns = [
            {
                Header: "User ID",
                accessor: "id",
                filterable: true,
                style: {
                    textAlign: "right",
                },
                      width: 100,
                maxWidth: 100,
                minWidth: 100,
            },

            {
                Header: "Username",
                accessor: "user_username",
                sortable: false,
                style: {
                    textAlign: "right",
                },

            },
            {
                Header: "Email",
                accessor: "email",
                sortable: false,

            style: {
                textAlign: "right",
            },
            },
            {
                Header: "User level",
                accessor: "user_level",
                filterable: false,
                style: {
                    textAlign: "right",
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },
            {
                Header: "Password",
                accessor: "user_password",
                sortable: false,
                filterable: false,
                style: {
                    textAlign: "right",
                },
            },
            {
                Header: "Actions",
                Cell: (props: any) => {
                    return (
                        <button style={{ backgroundColor: "red", color: "#fefefe" }}
                            onClick={() => {
                                this.changeState(props.original.id);
                            }}

                        >Change</button>
                    );
                },
                sortable: false,
                filterable: false,
                width: 100,
                maxWidth: 100,
                minWidth: 100,

            },
        ];
        return (

            <div>
                <h1>Administrator dashboard </h1>
                <ReactTable
                    columns={columns}
                    data={this.state.users}
                    filterable
                    noDataText={"No users found"}

                />
            </div>
        );
    }
}
