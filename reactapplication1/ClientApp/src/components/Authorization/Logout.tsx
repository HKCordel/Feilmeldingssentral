import React, { Component } from "react";

export default class Logout extends Component<{onLogoutClick: (event: any) => any}, {}> {

    public render() {
        const { onLogoutClick } = this.props;

        return (
            <button onClick={onLogoutClick} className="btn btn-primary">
                Logout
            </button>
        );
    }
}
