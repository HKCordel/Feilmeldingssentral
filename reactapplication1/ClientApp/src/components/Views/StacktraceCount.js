import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";


export class StacktraceCount extends Component {
    displayName = StacktraceCount.name
   
    constructor(props) {
        super(props);
        this.state = {
            expanded: {}, stacktrace: [], loading: true
        };
       
    } 
  
    componentDidMount() {

      
        fetch('http://192.168.2.8:3000' + '/stactraceCount', {
            method: "GET"
        }).then(response => response.json())
            .then(stacktrace => {
                this.setState({ stacktraces: stacktrace, loading: false });
            });
    }
    updateIsActive(stacktrace_hash) {
      
        fetch('http://192.168.2.8:3000/error_message?stacktrace_hash=eq.' + stacktrace_hash, {
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
    isActiveByType
 


    changeState(hash) {
        const index = this.state.stacktraces.findIndex(stacktrace => {
            return stacktrace.hash === hash
        })
        this.state.stacktraces.splice(index, 1);
        this.setState({ stacktraces: this.state.stacktraces });
    }
  

    render() {


        const columns = [
            {
                Header: "Count",
                accessor: "hash",
                filterable: true,
                style: {
                    textAlign: "right"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100
            },

            {
                Header: "Stacktrace",
                accessor: "stacktrace",
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
                    textAlign: "right"
                },
                width: 200,
                maxWidth: 200,
                minWidth: 200
            },

            {
                Header: "Actions",
                Cell: props => {
                    return (
                        <button style={{ backgroundColor: "red", color: "#fefefe" }}
                            onClick={() => {
                                this.updateIsActive(props.original.stacktrace_hash);
                                
                                
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
                <h1>Stacktrace count </h1>
                <ReactTable
                    columns={columns}
                    data={this.state.stacktraces}
                    filterable
                    noDataText={"No data found"}
                    pivotBy={["stacktrace"]}
                    expanded={this.state.expanded}
                    onExpandedChange={(newExpanded, index, event) => {
                        if (newExpanded[index[0]] === false) {
                            newExpanded = {}
                        } else {
                            Object.keys(newExpanded).map(k => {
                                newExpanded[k] = parseInt(k) === index[0] ? {} : false
                            })
                        }
                        this.setState({
                            ...this.state,
                            expanded: newExpanded
                        })
                    }}                 
                >
                </ReactTable>



            </div>
        );
    }
}