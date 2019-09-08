import React, { Component } from 'react';
import tinycolor from 'tinycolor2';
import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';

export default class Circles extends Component {
    constructor(props) {
        super(props)

        this.colorScale = scaleLinear()
            .domain([0, this.props.maxValue])
            .range(['#F3E5F5', '#7B1FA2'])
            .interpolate(interpolateLab)
    }

    onMouseEnter(datum) {
        this.props.setHoveredCircle(datum);
    }

    onMouseLeave(datum) {
        this.props.unsetHoveredCircle(datum);
    }

    render() {
        const { scales, data, svgDimensions } = this.props;
        const { xScale } = scales;
        const blue = "#5393fe";
        const red = "#f35d59";

        const circles = (
            data.map((d, index) =>
                <circle
                    key={d.date_start_time}
                    cx={xScale(d.date_start_time_conv)}
                    cy={this.props.cyRandom[index]}
                    //cy={yScale(Math.floor(Math.random() * (0 - 40 + 1)) + 40)}
                    r={Math.sqrt(d.session * (this.props.crSize * svgDimensions.width))}
                    fill={d.session > 20 ? red : tinycolor(blue).darken(d.session * 10).toString()}
                    onMouseEnter={datum => this.onMouseEnter(datum, index)}
                    onMouseLeave={datum => this.onMouseLeave(null)}
                />,
            )
        )
        //console.log(data.map(d => yScale(Math.floor(Math.random() * (0 - 40 + 1)) + 40)));

        return (
            <g>{circles}</g>
        )
    }
}