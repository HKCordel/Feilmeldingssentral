// components/Navbar.js

import React, { Component } from "react";
// import { loginUser, logoutUser } from "../actions";
import Login from "../Authorization/LoginForm";
import Logout from "../Authorization/Logout";

export default class Navbar extends Component<{
            dispatch: (event: any) => any,
            isAuthenticated: boolean,
            errorMessage?: string,
        }, {}> {

    public render() {
        const { dispatch, isAuthenticated, errorMessage } = this.props;

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Quotes App</a>
                    <div className="navbar-form">
                        {!isAuthenticated &&
                            <Login
                                onLoginClick={(creds) => dispatch(
                                            // loginUser(creds)
                                            "?", // Could not find file where this was implemented
                                        )}
                            />
                        }
                        {isAuthenticated &&
                            <Logout onLogoutClick={() => dispatch(
                                            // logoutUser()
                                            "?", // Could not find file where this was implemented
                                        )}
                            />
                        }
                    </div>
                </div>
            </nav>
        );
    }
}
