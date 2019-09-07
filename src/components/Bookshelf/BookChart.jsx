import React, { Component } from 'react';
import * as d3 from 'd3';
import classNames from 'classnames';
// import BookTooltip from "./BookTooltip";
// import { scaleLinear, scaleOrdinal } from 'd3-scale';
// import * as d3ScaleChromatic from 'd3-scale-chromatic';
import './BookChart.scss';

class BookChart extends Component {
    state = {
        barIsHovered: false,
    }

    drawChart() {
        const { barHeight, className, graphIsShowing, width } = this.props;
        let data = graphIsShowing;

        // const margin = { top: 20, right: 10, bottom: 20, left: 10 };
        const padding = 10;
        const height = barHeight + 10;

        const sumVals = d3.sum(data, function (d) { return d.value; });
        const barScale = d3.scaleLinear()
            .domain([0, sumVals])
            .range([0, (width - padding)]);

        const tooltip = d3.select("." + className)
            .append("div")
            .style("position", "absolute")
            .style("z-index", "10")
            .style("display", "none")
            .attr("class", "Tooltip");


        const svg = d3.select("." + className)
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")

            .attr("x", (d, i) => data.slice(0, i).reduce((a, d) => (a + barScale(d.value)), 1) + (padding / 2))
            .attr("y", 8)
            .attr("ry", 2)
            .attr("rx", 2)
            .attr("width", (d) => Math.max(barScale(d.value) - (padding / 2), 1))
            .attr("height", barHeight)
            .attr("fill", (d, i) => d.color)
            .on("mousemove", function (d) {
                // if (d.value > 1) {
                //     console.log(d3.event.pageX, d3.event.pageY);
                //     tooltip
                //         .style("left", d3.event.pageX + "px")
                //         .style("top", d3.event.pageY + "px")
                //         .style("display", "inline-block")
                //         .html(
                //             (d.genre + ": " + d.value)
                //         );
                // } else {
                    // console.log(d3.event.pageX, d3.event.pageY)
                    // tooltip
                    //     .style("left", barScale(d3.event.pageX) + "px")
                    //     .style("top", d3.event.pageY  + "px")
                    //     .style("display", "inline-block")
                    //     .html(
                    //         (d.genre + ": " + d.value)
                    //     );


            })
            .on("mouseout", (d) => tooltip.style("display", "none"))
    }

    componentDidMount() {
        this.drawChart();
    }

    render() {
        //const { barIsHovered } = this.state;
        const { className } = this.props;
        return (
            <div
                onMouseMove={this.onMouseMove}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
                className={classNames("BookChart", className)}>
                {/* {barIsHovered && (
                    <BookTooltip>
                        butts
                    </BookTooltip>
            )} */}
            </div>
        );
    }
}

export default BookChart;