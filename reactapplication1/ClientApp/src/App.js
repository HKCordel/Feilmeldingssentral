import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { SwaggerTest } from './components/SwaggerTest';






export default class App extends Component {


    displayName = App.name

 

    render() {


        return (
        
     
            <Layout>

        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
            <Route path='/fetchdata' component={FetchData} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
                <Route path='/Swagger' component={SwaggerTest} />
                
      </Layout>
    );
    }
    }