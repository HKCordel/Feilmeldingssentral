import matchSorter from "match-sorter";
import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { endpoint } from "../Utils/Common";

export class ErrorPrType extends Component<{}, {
    errorTypes: string[][],
    loading: boolean,
}> {

    constructor(props: any) {
        super(props);
        this.state = { errorTypes: [], loading: true };
    }

    public componentDidMount() {

        fetch(endpoint + "/AntallFeilPrType", {
            method: "GET",
        }).then((response) => response.json())
            .then((errorTypes) => {
                this.setState({ errorTypes, loading: false });
            });
    }
    public activeCaseErrorToFalse(stacktrace: string) {
        fetch(endpoint + "/error_message?id=eq." + stacktrace, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body:
                JSON.stringify({ isactive: false }),

        }).then((res) => {
        }).catch((err) => {
            // tslint:disable-next-line:no-console
            console.error(err);
        });
    }

    public render() {
        const columns = [
            {
                Header: "Stacktrace",
                accessor: "name",
                filterMethod: (filter: any, rows: any) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["name"] }),
                filterAll: true,
                style: {
                    textAlign: "right",
                },
            },
            {
                Header: "Antall",
                accessor: "antall",
                sortable: true,
                filterable: true,
                width: 100,
                maxWidth: 100,
                minWidth: 100,
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
                                this.activeCaseErrorToFalse(props.original.stacktrace);
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
                <h1> Oversikt over alle feilmeldingene</h1>
                <ReactTable
                    columns={columns}
                    data={this.state.errorTypes}
                    filterable
                    noDataText={"No users found"}
                    SubComponent={(row) => {
                        return (<div>
                            <h1>Feilmelding</h1>
                            <span className="class-for-description">{row.row.error_message}</span>
                            <h1> Stacktrace</h1>
                            <span className="class-for-description">{row.row.name}</span>
                        </div>
                        );
                    }}
                />
            </div>
        );
    }
}
