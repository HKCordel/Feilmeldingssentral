import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter'

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
    customerErrorsToFalse(id) {

        fetch('http://192.168.2.8:3000/error_message?customerid=eq.' + id, {
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
    customerError(id) {
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
                filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["name"] }),
                filterAll: true,
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
                                this.customerErrorsToFalse(props.original.id);
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