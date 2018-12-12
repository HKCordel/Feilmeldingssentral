import matchSorter from "match-sorter";
import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { endpoint } from "../Utils/Common";
import DetailComp from "./DetailComp";
// import Chart from './Chart';

export class GroupedErrors extends Component<{}, {
    errors: string[][],
    loading: boolean,
}> {

    constructor(props: any) {
        super(props);
        this.state = { errors: [], loading: true };
    }

    public async componentDidMount() {
        const response = await fetch(endpoint + "/groupederrors", {
            method: "GET",
        });
        const json = await response.json();
        this.setState({ errors: json, loading: false });
    }

    public changeState(id: string) {
        const index = this.state.errors.findIndex((error: any) => {
            return error["id"] === id;
        });
        this.state.errors.splice(index, 1);
        this.setState({ errors: this.state.errors });
    }

    public render() {
        const customerColumns = [
            {
                Header: "Count",
                accessor: "count",
                filterable: true,
                style: {
                    textAlign: "right",
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },

            {
                Header: "Customer id",
                accessor: "id",
                sortable: true,

                style: {
                    textAlign: "right",
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,

            },
            {
                Header: "Customer",
                accessor: "name",
                sortable: false,
                filterMethod: (filter: any, rows: any) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["error_message"] }),
                filterAll: true,

            },

        ];

        const columns = [
            {
                Header: "Count",
                accessor: "count",
                filterable: true,
                style: {
                    textAlign: "right",
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },

            {
                Header: "Stacktrace type",
                accessor: "name",
                sortable: true,
                filterMethod: (filter: any, rows: any) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["name"] }),
                filterAll: true,

                style: {
                    textAlign: "right",
                },

            },
            {
                Header: "Error message",
                accessor: "error_message",
                sortable: false,
                filterMethod: (filter: any, rows: any) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["error_message"] }),
                filterAll: true,
                style: {
                    textAlign: "right",
                },

            },
            {
                Header: "Stacktrace",
                accessor: "stacktrace",
                filterMethod: (filter: any, rows: any) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["stacktrace"] }),
                filterAll: true,
                sortable: false,
                style: {
                    textAlign: "right",
                },

            },

            {
                Header: "Stacktrace hash",
                accessor: "stacktrace_hash",
                filterable: false,
                style: {
                    textAlign: "right",
                },
                width: 200,
                maxWidth: 200,
                minWidth: 200,
            },

            {
                Header: "Actions",
                Cell: (props: any) => {
                    return (
                        <button style={{ backgroundColor: "red", color: "#fefefe" }}
                            onClick={() => {
                                this.changeState(props.original.hash);
                            }}

                        >Done</button>
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
                <h1>Error count overview </h1>
                <ReactTable
                    columns={columns}
                    data={this.state.errors}
                    filterable
                    noDataText={"No users found"}
                    SubComponent={(row) => {
                        return (
                            <DetailComp row={row}
                                stacktrace_hash={row.row.stacktrace_hash}
                                customerColumns={customerColumns} />
                        );
                    }}

                />
            </div>
        );
    }
}
