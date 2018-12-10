import React, { Component } from 'react';

import ReactTable from "react-table";

class DetailComp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            customersOnType: [], row: {}
        }
        this.url = "http://192.168.2.8:3000";
    }

    async componentDidMount() {
        let response = await fetch(this.url + "/errorTypeOnCustomer?stacktrace_hash=eq." + encodeURIComponent(this.props.stacktrace_hash))
        let json = await response.json()
        this.setState({ customersOnType: json, loading: false });
    }

    render() {
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

            >
            </ReactTable>

        </div>)
    }
}

export default DetailComp;