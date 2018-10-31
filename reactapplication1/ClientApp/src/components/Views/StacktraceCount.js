import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

export class StacktraceCount extends Component {
    displayName = StacktraceCount.name

    constructor(props) {
        super(props);
        this.state = { stacktrace: [], loading: true };
    }
    componentDidMount() {

        const url = "http://192.168.2.8:3000";
        fetch(url + '/stactraceCount', {
            method: "GET"
        }).then(response => response.json())
            .then(stacktrace => {
                this.setState({ stacktraces: stacktrace, loading: false });
            });
    }

    changState(hash) {
        const index = this.state.stacktraces.findIndex(stacktrace => {
            return stacktrace.hash === hash
        })
        console.log("index", index);
    }


    render() {


        const columns = [
            {
                Header: "Count",
                accessor: "hash",
                filterable: true,
                style: {
                    textAlign: "right"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100
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
                <h1>Stacktrace count </h1>
                <ReactTable
                    columns={columns}
                    data={this.state.stacktraces}
                    filterable
                    noDataText={"No users found"}

                >
                </ReactTable>



            </div>
        );
    }
}