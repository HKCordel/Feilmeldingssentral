import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";

import { Login } from "./components/Authorization/Login";
import { Register } from "./components/Authorization/Register";

import { ActiveCases } from "./components/Views/ActiveCases";
import { Chart } from "./components/Views/Chart";
import { CustomerErrorCount } from "./components/Views/CustomerErrorCount";
import { ErrorPrType } from "./components/Views/ErrorPrType";
import { groupedErrors } from "./components/Views/GroupedErrors";
import { StacktraceCount } from "./components/Views/StacktraceCount";
import { viewAllErrors } from "./components/Views/ViewAllErrorsjs";

export default class App extends Component {
    public render() {
        return (
            <Layout>
                <Route path="/activecases" component={ActiveCases} />
                <Route path="/viewAllErrors" component={viewAllErrors} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/CustomerErrorCount" component={CustomerErrorCount} />
                <Route path="/stacktraceCount" component={StacktraceCount} />
                <Route path="/groupedErrors" component={groupedErrors} />
                <Route path="/errorPrType" component={ErrorPrType} />
                <Route exact path="/Chart" component={Chart} />
            </Layout>
        );
    }
}
