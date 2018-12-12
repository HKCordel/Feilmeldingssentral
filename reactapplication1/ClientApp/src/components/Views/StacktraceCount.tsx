import matchSorter from "match-sorter";
import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { endpoint } from "../Utils/Common";

export class StacktraceCount extends Component<{}, {
    expanded: any,
    stacktraces: string[][],
    loading: boolean,
    selected: any,
}> {

    constructor(props: any) {
        super(props);
        this.state = {
            expanded: {}, stacktraces: [], loading: true, selected: null,
        };
    }

    public componentDidMount() {

        fetch(endpoint + "/stactraceCount", {
            method: "GET",
        }).then((response) => response.json())
            .then((stacktraces) => {
                this.setState({ stacktraces, loading: false });
            });
    }

    public updateIsActive(stacktraceHash: string) {

        fetch(endpoint + "/error_message?stacktrace_hash=eq." + stacktraceHash, {
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

    public changeState(hash: string) {
        const index = this.state.stacktraces.findIndex((stacktrace: any) => {
            return stacktrace["hash"] === hash;
        });
        this.state.stacktraces.splice(index, 1);
        this.setState({ stacktraces: this.state.stacktraces });
    }

    public render() {

        const columns = [
            {
                Header: "Count",
                accessor: "hash",
                filterable: true,
                style: {
                    textAlign: "right",
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },

            {
                Header: "Stacktrace",
                accessor: "stacktrace",
                filterMethod: (filter: any, rows: any) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["name"] }),
                filterAll: true,
                sortable: false,
                style: {
                    textAlign: "right",

                },

            },

            {
                Header: "Stacktrace hash",
                accessor: "stacktrace_hash",
                id: "stacktrace_hash",
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
                                this.updateIsActive(props.original.stacktrace_hash);
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
                <h1>Stacktrace count </h1>
                <ReactTable
                    columns={columns}
                    data={this.state.stacktraces}
                    filterable
                    noDataText={"No data found"}
                    SubComponent={(row) => {
                        return (<div>
                            <span className="class-for-name">{row.row.stacktrace}</span>
                            <span className="class-for-description">{row.row.hash}</span>
                        </div>
                        );
                    }}
                />
            </div>
        );
    }
}
