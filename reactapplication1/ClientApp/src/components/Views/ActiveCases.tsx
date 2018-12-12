import matchSorter from "match-sorter";
import React, { Component } from "react";
import ReactTable, { Column, RowInfo } from "react-table";
import "react-table/react-table.css";
import { endpoint } from "../Utils/Common";

export class ActiveCases extends Component<{}, {
            lines: string[][],
            loading: boolean}> {

    constructor(props: any) {
        super(props);
        this.state = { lines: [], loading: true };
    }

    public componentDidMount() {
        fetch(endpoint + "/ActiveCases", {
            method: "GET",
        }).then((response) => response.json())
            .then((lines) => {
                this.setState({ lines, loading: false });
            });
    }

    public activeCaseErrorToFalse(id: string) {
        fetch(endpoint + "/error_message?id=eq." + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body:
                JSON.stringify({ isactive: false }),

        }).then((res) => {
            // console.log(res);
        }).catch((err) => {
            // tslint:disable-next-line:no-console
            console.error(err);
        });

    }

    public render() {

        const columns: Array<Column<string[]>> = [
            {
                Header: "Case ID",
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
                Header: "Error message",
                accessor: "error_message",
                sortable: false,
                filterMethod: (filter: any, rows: any[]) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["error_message"] }),
                filterAll: true,
                style: {
                    textAlign: "right",
                },

            },
            {
                Header: "Customer ID",
                accessor: "customerid",
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
                filterMethod: (filter: any, rows: any) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["name"] }),
                filterAll: true,
                style: {
                    textAlign: "right",
                },
            },
            {
                Header: "Stacktrace",
                accessor: "stacktrace",
                filterMethod: (filter: any, rows: string[][]) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["stacktrace"] }),
                filterAll: true,
                sortable: false,
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
                                    if (window.confirm("Er du sikker på at du vil avslutte saken?")) {
                                        this.activeCaseErrorToFalse(props.original.id);
                                    }
                                }}
                        >
                            Done
                        </button>
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
                <h1>Active cases </h1>
                <ReactTable
                    columns={columns}
                    data={this.state.lines}
                    filterable
                    noDataText={"No users found"}
                    SubComponent={(row: RowInfo) => {
                        return (<div>
                            <h1>Error message</h1>
                            <span className="class-for-description">{row.row.error_message}</span>
                            <h1> Stacktrace</h1>
                            <span className="class-for-description">{row.row.stacktrace}</span>
                        </div>
                        );
                    }}
                />
            </div>
        );
    }
}
