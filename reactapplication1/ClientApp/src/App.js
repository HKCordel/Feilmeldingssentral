import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/Views/FetchData';
import { Login } from './components/Authorization/Login';
import { Register } from './components/Authorization/Register';

import { ActiveCases } from './components/Views/ActiveCases';
import { CustomerErrorCount } from './components/Views/CustomerErrorCount';
import { StacktraceCount } from './components/Views/StacktraceCount';
import { groupedErrors } from './components/Views/groupedErrors';
import { viewAllErrors } from './components/Views/viewAllErrorsjs';
import { errorPrType } from './components/Views/errorPrType';
import { Chart } from './components/Chart';







export default class App extends Component {


    displayName = App.name



    render() {


        return (


            <Layout>

                <Route exact path='/test' component={Home} />
                <Route path='/activecases' component={ActiveCases} />
                <Route path='/fetchdata' component={FetchData} />
                <Route path='/viewAllErrors' component={viewAllErrors} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
              
                <Route path='/CustomerErrorCount' component={CustomerErrorCount} />
                <Route path='/stacktraceCount' component={StacktraceCount} />
                <Route path='/groupedErrors' component={groupedErrors} />
                <Route path='/errorPrType' component={errorPrType} />
                <Route path='/Chart' component={Chart} />
            </Layout>
        );
    }
}