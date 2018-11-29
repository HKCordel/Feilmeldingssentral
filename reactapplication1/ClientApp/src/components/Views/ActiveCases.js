import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter'

export class ActiveCases extends Component {
    displayName = ActiveCases.name

    constructor(props) {
        super(props);
        this.state = { data: [], loading: true };
        this.url = "http://192.168.2.8:3000";
    }
    componentDidMount() {

      
        fetch(this.url + '/ActiveCases', {
            method: "GET"
        }).then(response => response.json())
            .then(data => {
                this.setState({ datas : data, loading: false });
            });
    }
    activeCaseErrorToFalse(id) {

        fetch(this.url + '/error_message?id=eq.' + id, {
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
                filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["error_message"] }),
                filterAll: true,
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
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100
            },
            {
                Header: "Customer",
                accessor: "name",
                filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["name"] }),
                filterAll: true,
                style: {
                    textAlign: "right"
                },
              
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
                Header: "Actions",
                Cell: props => {
                    return (
                        <button style={{ backgroundColor: "red", color: "#fefefe" }}
                            onClick={() => {
                                this.activeCaseErrorToFalse(props.original.id);
                            }}

                        >Done</button>
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
                <h1>Active cases </h1>
                <ReactTable
                    columns={columns}
                    data={this.state.datas}
                    filterable
                    noDataText={"No users found"}
                    SubComponent={row => {
                        return (<div>
                            <h1>Error message</h1>
                            <span className="class-for-description">{row.row.error_message}</span>
                            <h1> Stacktrace</h1>
                            <span className="class-for-description">{row.row.stacktrace}</span>
                        </div>
                        );
                    }}

                >
                </ReactTable>



            </div>
        );
    }
}