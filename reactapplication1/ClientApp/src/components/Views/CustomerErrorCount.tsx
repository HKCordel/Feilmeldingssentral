import matchSorter from "match-sorter";
import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import {endpoint} from "../Utils/Common";

export class CustomerErrorCount extends Component <{}, {
    customers: string[][],
    loading: boolean,
}> {

    constructor(props: any) {
        super(props);
        this.state = { customers: [], loading: true };
    }

    public componentDidMount() {

        fetch(endpoint + "/customerErrorCount", {
            method: "GET",
        }).then((response) => response.json())
            .then((customer) => {
                this.setState({ customers: customer, loading: false });
            });
    }
    public customerErrorsToFalse(id: string) {

        fetch(endpoint + "/error_message?customerid=eq." + id, {
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
                Header: "Case ID",
                accessor: "id",
                filterable: true,
                style: {
                    textAlign: "center",
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },
            {
                Header: "Kundenavn",
                accessor: "name",
                sortable: false,
                filterMethod: (filter: any, rows: any) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["name"] }),
                filterAll: true,
                style: {
                    textAlign: "center",
                },

            },
            {
                Header: "Antall feil",
                accessor: "count",
                filterable: false,
                style: {
                    textAlign: "center",
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },
            {
                Header: "Håndtering",
                Cell: (props: any) => {
                    return (
                        <button style={{ backgroundColor: "red", color: "#fefefe" }}
                            onClick={() => {
                                this.customerErrorsToFalse(props.original.id);
                            }}
                        >Ferdig</button>
                    );
                },
                style: {
                    textAlign: "center",
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
                <h1>Customer error count </h1>
                <ReactTable
                    columns={columns}
                    data={this.state.customers}
                    filterable
                    noDataText={"No users found"}
                />
            </div>
        );
    }
}
