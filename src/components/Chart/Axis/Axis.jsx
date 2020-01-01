import React, { Component } from 'react';
import * as d3Axis from 'd3-axis';
import * as d3 from 'd3';
import { select as d3Select } from 'd3-selection';
import './Axis.scss'

export default class Axis extends Component {
    componentDidMount() {
        this.renderAxis();
    }

    componentDidUpdate() {
        this.renderAxis();
    }

    renderAxis() {
        const axisType = `axis${this.props.orient}`
        const axis = d3Axis[axisType]()
            .scale(this.props.scale)
            .ticks(d3.timeWeek.every(2))
            .tickPadding([12])
            .tickValues(this.props.tickValues)
            .tickSizeOuter(0)
            .tickFormat(this.props.tickFormat);

        d3Select(this.axisElement).call(axis)
    }

    render() {
        return (
            <g
                className={`CrochetAxis Axis Axis-${this.props.orient}`}
                ref={(el) => { this.axisElement = el; }}
                transform={this.props.translate}
            />
        )
    }
}