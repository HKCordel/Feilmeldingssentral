/*import React, { Component } from 'react';
import { render } from 'react-dom'
import { ResponsivePie } from '@nivo/pie'

export class Chart extends Component {
    displayName = Chart.name
    constructor(props) {
        super(props);
        this.state = { error_type: [], loading: true };
    }
    componentDidMount() {

        const url = "http://192.168.2.8:3000";
        fetch(url + '/AntallFeilPrType', {
            method: "GET"
        }).then(response => response.json())
            .then(error_type => {
                this.setState({ error_types: error_type, loading: false });
            });
        // make sure parent container have a defined height when using responsive component,
        // otherwise height will be 0 and no chart will be rendered.
        // website examples showcase many properties, you'll often use just a few of them.
        render((
            <ResponsivePie
                data={this.state.error_types}
                margin={{
                    "top": 40,
                    "right": 80,
                    "bottom": 80,
                    "left": 80,
                 
                }}
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
                defs={[
                    {
                        "id": "dots",
                        "type": "patternDots",
                        "background": "inherit",
                        "color": "rgba(255, 255, 255, 0.3)",
                        "size": 4,
                        "padding": 1,
                        "stagger": true
                    },
                    {
                        "id": "lines",
                        "type": "patternLines",
                        "background": "inherit",
                        "color": "rgba(255, 255, 255, 0.3)",
                        "rotation": -45,
                        "lineWidth": 6,
                        "spacing": 10
                    }
                ]}
                fill={[
                    {
                        "match": {
                            "name": "LongLastingLock"
                        },
                        "id": "dots"
                    },
                    {
                        "match": {
                            "name": "Cordel.Common.ErrorHandling.DatabaseOperationException"

                        },
                        "id": "dots"
                    },
                    {
                        "match": {
                            "name": "System.NullReferenceException"
                        },
                        "id": "dots"
                    },
               
                ]}
                legends={[
                    {
                        "anchor": "bottom",
                        "direction": "row",
                        "translateY": 56,
                        "itemWidth": 100,
                        "itemHeight": 18,
                        "itemTextColor": "#999",
                        "symbolSize": 18,
                        "symbolShape": "circle",
                        "effects": [
                            {
                                "on": "hover",
                                "style": {
                                    "itemTextColor": "#000"
                                }
                            }
                        ]
                    }
                ]}
            />
        ), document.getElementById('chart'))
    }
}*/