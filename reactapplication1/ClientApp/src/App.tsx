import React, { Component } from "react";
import { Route } from "react-router";
import { Login } from "./components/Authorization/Login";
import { Register } from "./components/Authorization/Register";
import { Layout } from "./components/Layout";
import { ActiveCases } from "./components/Views/ActiveCases";
import { Chart } from "./components/Views/Chart";
import { CustomerErrorCount } from "./components/Views/CustomerErrorCount";
import { ErrorPrType } from "./components/Views/ErrorPrType";
import { GroupedErrors } from "./components/Views/GroupedErrors";
import { StacktraceCount } from "./components/Views/StacktraceCount";
import { ViewAllErrors } from "./components/Views/ViewAllErrorsjs";

export default class App extends Component {
    public render() {
        return (
            <Layout>
                <Route path="/activecases" component={ActiveCases} />
                <Route path="/viewAllErrors" component={ViewAllErrors} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/CustomerErrorCount" component={CustomerErrorCount} />
                <Route path="/stacktraceCount" component={StacktraceCount} />
                <Route path="/groupedErrors" component={GroupedErrors} />
                <Route path="/errorPrType" component={ErrorPrType} />
                <Route exact path="/Chart" component={Chart} />
            </Layout>
        );
    }
}
