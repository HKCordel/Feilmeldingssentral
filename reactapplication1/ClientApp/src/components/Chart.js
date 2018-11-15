﻿import React, { Component } from 'react';
import { ResponsivePie } from '@nivo/pie'

export class Chart extends Component {
    displayName = Chart.name

    constructor(props) {
        super(props);
        this.state = { error_types: [], loading: true };
    }

    componentDidMount() {

        const url = "http://192.168.2.8:3000";
        //fetch(url + '/AntallFeilPrType?select=id:name,value:antall', {
        //    method: "GET"
        //}).then(response => this.setState({ error_types: error_type, loading: false }));


        fetch(url + '/AntallFeilPrType?select=id:name,value:antall', {
            method: "GET"
        }).then(response => response.json())
            .then(error_type => {
                this.setState({ error_types: error_type, loading: false });
            });
    }
        // make sure parent container have a defined height when using responsive component,
        // otherwise height will be 0 and no chart will be rendered.
        // website examples showcase many properties, you'll often use just a few of them.
    render() {
        var values = [
            {
                "id": "rust",
                //"label": "rust",
                "value": 428,
                //"color": "hsl(155, 70%, 50%)"
            },
            {
                "id": "php",
                //"label": "php",
                "value": 176,
                //"color": "hsl(22, 70%, 50%)"
            }
        ];

        return (
            <div style={{
                height: "400px"
            }}>
                <ResponsivePie
                    data={this.state.error_types}
                    margin={{
                        "top": 40,
                        "right": 80,
                        "bottom": 80,
                        "left": 80
                    }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors="nivo"
                    colorBy="id"
                    borderWidth={1}
                    borderColor="inherit:darker(0.2)"
                    radialLabelsSkipAngle={10}
                    radialLabelsTextXOffset={6}
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
        );
    }
}