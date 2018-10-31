﻿import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

export class CustomerErrorCount extends Component {
    displayName = CustomerErrorCount.name

    constructor(props) {
        super(props);
        this.state = { customer : [], loading: true };
    }
    componentDidMount() {

        const url = "http://192.168.2.8:3000";
        fetch(url + '/customerErrorCount', {
            method: "GET"
        }).then(response => response.json())
            .then(customer => {
                this.setState({ customers : customer, loading: false });
            });
    }

    changState(id) {
        const index = this.state.customers.findIndex(customer => {
            return customer.id === id
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
                Header: "Customer name",
                accessor: "name",
                sortable: false,
                style: {
                    textAlign: "right"
                }

            },

            {
                Header: "Count",
                accessor: "count",
                filterable: false,
                style: {
                    textAlign: "right"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100
            },

            {
                Header: "Actions",
                Cell: props => {
                    return (
                        <button style={{ backgroundColor: "red", color: "#fefefe" }}
                            onClick={() => {
                                this.changeState(props.original.id);
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
                <h1>Customer error count </h1>
                <ReactTable
                    columns={columns}
                    data={this.state.customers}
                    filterable
                    noDataText={"No users found"}

                >
                </ReactTable>



            </div>
        );
    }
}