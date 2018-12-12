import React, { Component } from "react";
import ReactTable, { Column } from "react-table";
import {endpoint} from "../Utils/Common";

class DetailComp extends Component <{
    stacktrace_hash: string,
    customerColumns: Array<Column<string[]>>,
    row: any,
}, {
    customersOnType: string[][],
    loading: boolean,
}> {
    constructor(props: any) {
        super(props);
        this.state = {
            customersOnType: [],
            loading: false,
        };
    }

    public async componentDidMount() {
        this.setState({loading: true});
        const response = await fetch(endpoint
                + "/errorTypeOnCustomer?stacktrace_hash=eq."
                + encodeURIComponent(this.props.stacktrace_hash));
        const json = await response.json();
        this.setState({ customersOnType: json, loading: false });
    }

    public render() {
        return (
            <div>
                <h1>Error type</h1>
                <span className="class-for-description">{this.props.row.row.name}</span>
                <h1> Stacktrace</h1>
                <span className="class-for-description">{this.props.row.row.stacktrace}</span>
                <h3> stacktrace_hash </h3>
                <span className="Class-for-description"> {this.props.row.row.stacktrace_hash}</span>
                <h1> Customers </h1>

                <ReactTable

                    columns={this.props.customerColumns}
                    data={this.state.customersOnType}
                    filterable
                    noDataText={"No customers found"}

                />
            </div>
        );
    }
}

export default DetailComp;
