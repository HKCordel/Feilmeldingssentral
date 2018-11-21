import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter'
import { PieChart } from 'react-easy-chart';


export class errorPrType extends Component {
    displayName = errorPrType.name

    constructor(props) {
        super(props);
        this.state = { error_type: [], loading: true };
    }
    componentDidMount() {

        const url = "http://192.168.2.8:3000";
        fetch(url + '/AntallFeilPrType', {
            method: "GET"
        }).then(response => response.json())
            .then(error_type => {
                this.setState({ error_types: error_type, loading: false });
            });
    }
    activeCaseErrorToFalse(stacktrace) {

        fetch('http://192.168.2.8:3000/error_message?id=eq.' + stacktrace, {
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

    changState(stacktrace) {
        const index = this.state.datas.findIndex(error_type => {
            return error_type.stacktrace === stacktrace
        })
        console.log("index", index);
    }


    render() {



        const columns = [
            {
                Header: "Stacktrace",
                accessor: "name",
                
                filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value.toLowerCase(), { keys: ["name"] }),
                filterAll: true,
                style: {
                    textAlign: "right"



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
                    textAlign: "right"
                },

            },
            
        
            {
                Header: "Actions",
                Cell: props => {
                    return (
                        <button style={{ backgroundColor: "red", color: "#fefefe" }}
                            onClick={() => {
                                this.activeCaseErrorToFalse(props.original.stacktrace);
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
           

                <h1> Oversikt over alle feilmeldingene</h1>
                
                
                <ReactTable
                    columns={columns}
                    data={this.state.error_types}
                    filterable
                    noDataText={"No users found"}
                    SubComponent={row => {
                        return (<div>
                            <h1>Feilmelding</h1>
                            <span className="class-for-description">{row.row.error_message}</span>
                            <h1> Stacktrace</h1>
                            <span className="class-for-description">{row.row.name}</span>

                        </div>
                        );
                    }}

                >
                </ReactTable>



            </div>
        );
    }
}