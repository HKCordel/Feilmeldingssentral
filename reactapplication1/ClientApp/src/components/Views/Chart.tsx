import { ResponsivePie } from "@nivo/pie";
import React, { Component } from "react";
import { endpoint } from "../Utils/Common";

export class Chart extends Component<{}, {
        errorTypes: any[],
        loading: boolean,
}> {

    constructor(props: any) {
        super(props);
        this.state = { errorTypes: [], loading: true };
    }

    public componentDidMount() {
        fetch(endpoint + "/AntallFeilPrType?select=id:name,value:antall", {
            method: "GET",
        }).then((response) => response.json())
            .then((errorTypes) => {
                this.setState({ errorTypes, loading: false });
            });
    }
    // make sure parent container have a defined height when using responsive component,
    // otherwise height will be 0 and no chart will be rendered.
    // website examples showcase many properties, you'll often use just a few of them.
    public render() {

        return (
            <div>
                <h1>Cordel feilmeldingssentral </h1>
                <div style={{
                    height: "600px",

                }}>
                    <ResponsivePie
                        data={this.state.errorTypes}
                        margin={{
                            top: 40,
                            right: 80,
                            bottom: 80,
                            left: 80,
                        }}
                        innerRadius={0.5}
                        padAngle={0.7}
                        cornerRadius={3}
                        colors="nivo"
                        colorBy="id"
                        borderWidth={1}
                        borderColor="inherit:darker(0.2)"
                        radialLabelsSkipAngle={10}
                        radialLabelsTextXOffset={8}
                        radialLabelsTextColor="#333333"
                        radialLabelsLinkOffset={0}
                        radialLabelsLinkDiagonalLength={16}
                        radialLabelsLinkHorizontalLength={24}
                        radialLabelsLinkStrokeWidth={1}
                        radialLabelsLinkColor="inherit"
                        slicesLabelsSkipAngle={10}
                        slicesLabelsTextColor="#333333"
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}

                    />
                </div>
            </div>
        );
    }
}
