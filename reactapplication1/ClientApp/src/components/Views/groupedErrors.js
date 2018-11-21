import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter'
//import Chart from './Chart';

export class groupedErrors extends Component {
    displayName = groupedErrors.name

    constructor(props) {
        super(props);
        this.state = { errors: [], loading: true, customersOnType: [], stacktrace_hash:[] };

        fetch("http://192.168.2.8:3000/errorTypeOnCustomer?stacktrace_hash=eq.")


            .then(response => response.json())
            .then(customerOnType => {
                this.setState({ customersOnType: customerOnType, loading: false });
            });
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
        const customerColumns = [
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
                Header: "Customer id",
                accessor: "id",
                sortable: true,
              

                style: {
                    textAlign: "right"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100

            },
            {
                Header: "Customer",
                accessor: "name",
                sortable: false,
                filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["error_message"] }),
                filterAll: true,
              

            },

        ]
        
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
                sortable: true,
                filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["name"] }),
                filterAll: true,
                
                style: {
                    textAlign: "right"
                }

            },
            {
                Header: "Error message",
                accessor: "error_message",
                sortable: false,
                filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["error_message"] }),
                filterAll: true,
                style: {
                    textAlign: "right"
                }

            },
            {
                Header: "Stacktrace",
                accessor: "stacktrace",
                filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["stacktrace"] }),
                filterAll: true,
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
                    SubComponent={row => {
                        return (<div>
                            <h1>Error type</h1>
                            <span className="class-for-description">{row.row.name}</span>
                            <h1> Stacktrace</h1>
                            <span className="class-for-description">{row.row.stacktrace}</span>
                            <h3> stacktrace_hash </h3>
                            <span className="Class-for-description"> {row.row.stacktrace_hash}</span>
                            <h1> Customers </h1>
                            
                            
                            <ReactTable

                                columns={customerColumns}
                                data={this.state.customersOnType}
                                filterable
                                noDataText={"No customers found"}

                            >
                                </ReactTable>
                    
                        </div>

                        );
                    }}

                >
                </ReactTable>



            </div>
        );
    }
}