import matchSorter from "match-sorter";
import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

export class ViewAllErrors extends Component<{}, {
    items: string[][],
    loading: boolean,
}> {

    constructor(props: any) {
        super(props);
        this.state = { items: [], loading: true };
    }
    public componentDidMount() {

        const url = "http://192.168.2.8:3000";
        fetch(url + "/viewAllErrors", {
            method: "GET",
        }).then((response) => response.json())
            .then((item) => {
                this.setState({ items: item, loading: false });
            });
    }
    public activeCaseErrorToFalse(id: string) {
        fetch("http://192.168.2.8:3000/error_message?id=eq." + id, {
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
                    textAlign: "right",
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },
            {
                Header: "Kunde",
                accessor: "customer",
                sortable: true,
                filterable: true,
                style: {
                    textAlign: "right",
                },
            },
            {
                Header: "Produkt",
                accessor: "product",
                sortable: true,
                filterable: true,
                style: {
                    textAlign: "right",
                },
            },
            {
                Header: "Stacktrace",
                accessor: "name",
                filterMethod: (filter: any, rows: any) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["name"] }),
                filterAll: true,
                sortable: true,
                style: {
                    textAlign: "right",
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },
            {
                Header: "Feilmelding",
                accessor: "error_message",
                sortable: true,
                filterMethod: (filter: any, rows: any) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["error_message"] }),
                filterAll: true,
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
                                this.activeCaseErrorToFalse(props.original.id);
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
                    data={this.state.items}
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
