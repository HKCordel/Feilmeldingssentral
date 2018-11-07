import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

export class ActiveCases extends Component {
    displayName = ActiveCases.name

    constructor(props) {
        super(props);
        this.state = { data: [], loading: true };
    }
    componentDidMount() {

        const url = "http://192.168.2.8:3000";
        fetch(url + '/ActiveCases', {
            method: "GET"
        }).then(response => response.json())
            .then(data => {
                this.setState({ datas : data, loading: false });
            });
    }
    activeCaseErrorToFalse(id) {

        fetch('http://192.168.2.8:3000/error_message?id=eq.' + id, {
            method: 'PATCH',

            headers: {
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify({ "isactive": false }),


        }).then(res => {
            console.log(res);

        }).catch(err => {
            console.log(err)
        });

    }

    changState(id) {
        const index = this.state.datas.findIndex(data => {
            return data.id === id
        })
        console.log("index", index);
    }


    render() {


        const columns = [
            {
                Header: "Case ID",
                accessor: "id",
                filterable: true,
                style: {
                    textAlign: "right"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100
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
                Header: "Customer ID",
                accessor: "customerid",
                sortable: true,

                style: {
                    textAlign: "right"
                }
            },
            {
                Header: "Customer",
                accessor: "name",
                filterable: false,
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
                filterable: true,
                style: {
                    textAlign: "right"
                }
            },
            {
                Header: "Actions",
                Cell: props => {
                    return (
                        <button style={{ backgroundColor: "red", color: "#fefefe" }}
                            onClick={() => {
                                this.activeCaseErrorToFalse(props.original.id);
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
                <h1>Administrator dashboard </h1>
                <ReactTable
                    columns={columns}
                    data={this.state.datas}
                    filterable
                    noDataText={"No users found"}

                >
                </ReactTable>



            </div>
        );
    }
}