import React, { Component } from 'react';

import CustomLayout from './CustomLayout'
import './App.css';
import 'swagger-ui/dist/swagger-ui.css';





export class SwaggerTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        fetch('http://info.systemkonsult.no:3000/user_table')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }


    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div> Wrong password</div>;
        }
        else {
            return (
                <div className="app">

                    <ul>
                        {items.map(item => (
                            <li key={item.id}>

                                Username: {item.user_username} ||
                                email: {item.email} ||
                               Id: {item.id}
                            </li>

                        ))};
                        </ul>


                </div>
            );

        }
    }
}

