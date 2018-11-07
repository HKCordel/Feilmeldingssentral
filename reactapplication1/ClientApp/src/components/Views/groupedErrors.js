import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";


export class groupedErrors extends Component {
    displayName = groupedErrors.name

    constructor(props) {
        super(props);
        this.state = { errors: [], loading: true };
    }
    componentDidMount() {

        const url = "http://192.168.2.8:3000";
        fetch(url + '/groupederrors', {
            method: "GET"
        }).then(response => response.json())
            .then(error => {
                this.setState({ errors: error, loading: false });
            });
    }

    changState(count) {
        const index = this.state.errors.findIndex(error => {
            return error.count === count
        })
        console.log("index", index);
    }


    render() {


        const columns = [
            {
                Header: "Count",
                accessor: "count",
                filterable: true,
                style: {
                    textAlign: "right"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100
            },

            {
                Header: "Stacktrace type",
                accessor: "name",
                sortable: false,
                style: {
                    textAlign: "right"
                }

            },
            {
                Header: "Error message",
                accessor: "error_message",
                sortable: false,
                style: {
                    textAlign: "right"
                }

            },
            {
                Header: "Stacktrace",
                accessor: "stacktrace",
                sortable: false,
                style: {
                    textAlign: "right"
                }

            },

            {
                Header: "Stacktrace hash",
                accessor: "stacktrace_hash",
                filterable: false,
                style: {
                    textAlign: "right"
                },
                width: 200,
                maxWidth: 200,
                minWidth: 200
            },

            {
                Header: "Actions",
                Cell: props => {
                    return (
                        <button style={{ backgroundColor: "red", color: "#fefefe" }}
                            onClick={() => {
                                this.changeState(props.original.hash);
                            }}

                        >Change</button>
                    )
                },
                sortable: false,
                filterable: false,
                width: 100,
                maxWidth: 100,
                minWidth: 100

            }
        ]
        return (

            <div>
                <h1>Error count overview </h1>
                <ReactTable
                    columns={columns}
                    data={this.state.errors}
                    filterable
                    noDataText={"No users found"}

                >
                </ReactTable>



            </div>
        );
    }
}