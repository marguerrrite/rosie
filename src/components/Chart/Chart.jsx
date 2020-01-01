import React, { Component } from 'react';
import * as d3 from 'd3';
import { scaleLinear, scaleTime } from 'd3-scale';
import Axes from 'components/Chart/Axes/Axes';
import Circles from 'components/Chart/Circles/Circles';
import ChartContainer from 'components/Chart/ChartContainer';
import PropTypes from 'prop-types';

import './Chart.scss';

const cyRandomDesktop = [242.5, 76.25, 242.5, 76.25, 85, 303.75,
                        356.25, 93.75, 146.25, 76.25, 277.5, 365,
                        120, 76.25, 356.25, 137.5, 216.25, 233.75,
                        67.5, 155, 391.25, 58.75, 128.75, 303.75,
                        190, 225, 295, 312.5, 251.25, 277.5,
                        373.75, 277.5, 102.5, 88];

const cyRandomMobile = [200, 176.5, 160, 83, 55.5, 72,
                        154.5, 215, 77.5, 209.5, 182,
                        231.5, 88.5, 143.5, 176.5, 105,
                        264.5, 121.5, 94, 99.5, 176.5,
                        187.5, 116, 77.5, 187.5, 116,
                        171, 198.5, 110.5, 182, 127,
                        83, 154.5, 75];

class Chart extends Component {
    constructor(props) {
        super(props)
        this.xScale = scaleTime();
        this.yScale = scaleLinear();

        this.state = {
            chartHeight: 480,
            crSize: 1.1,
            cyRandom: cyRandomDesktop,
        }
    }

    static propTypes = {
        hoveredCircle: PropTypes.object,
        isLoaded: PropTypes.bool,
        setHoveredCircle: PropTypes.func,
        unsetHoveredCircle: PropTypes.func,
    };

    componentDidMount() {
        this.setCircles();
        window.addEventListener('resize', this.setCircles);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setCircles);
    }

    setCircles = () => {
        if(window.innerWidth < 768) {
            this.setState({ chartHeight: 300,
                            crSize: 0.25,
                            cyRandom: cyRandomMobile,
                         });
        } else {
            this.setState({ chartHeight: 480,
                            crSize: 1.1,
                            cyRandom: cyRandomDesktop,
                         });
        }
    }

    render() {
        const { data, isLoaded, isHovered, toggleHover, hoveredCircle, setHoveredCircle, unsetHoveredCircle  } = this.props;
        const margins = { top: 50, right: 0, bottom: 30, left: 0 };
        const svgDimensions = {
            width: Math.max(this.props.parentWidth, 300),
            height: this.state.chartHeight,
        };

        const maxValue = Math.max(...data.map(d => d.value));
        const startDate = d3.min(data, function (d) { return d.date_start_time_conv; });
        const endDate = d3.max(data, function (d) { return d.date_end_time_conv; });

        // scaleTime type
        const xScale = this.xScale
            // scaleTime domain should be an array between start
            // date and end date
            .domain([
                d3.timeDay.offset(startDate, -5),
                d3.timeDay.offset(endDate, 3)
            ])
            .range([margins.left, svgDimensions.width - margins.right])

        // scaleLinear type
        const yScale = this.yScale
            // scaleLinear domain required at least two values, min and max
            .domain([
                0,
                d3.max(data, function (d) {
                    return 40;
                })
            ])
            .range([svgDimensions.height - margins.bottom, margins.top]);
        return (
            <div className="Chart__container">
                <svg
                    className="CrochetChart Chart"
                    width={svgDimensions.width}
                    height={svgDimensions.height}>
                    <Axes
                        scales={{ xScale, yScale }}
                        margins={margins}
                        svgDimensions={svgDimensions}
                    />

                    {isLoaded ? (
                        <Circles
                            scales={{ xScale, yScale }}
                            margins={margins}
                            data={data}
                            maxValue={maxValue}
                            svgDimensions={svgDimensions}
                            isHovered={isHovered}
                            hoveredCircle={hoveredCircle}
                            toggleHover={toggleHover}
                            //onMouseOverCallback={datum => this.setHoveredCircle(datum)}
                            //onMouseOutCallback={datum => this.setHoveredCircle(null)}
                            setHoveredCircle={setHoveredCircle}
                            unsetHoveredCircle={unsetHoveredCircle}
                            crSize={this.state.crSize}
                            cyRandom={this.state.cyRandom}
                        />
                    ) : (
                        <text>
                            loading
                        </text>
                    )}
                </svg>
            </div>
        );
    }
}

export default ChartContainer(Chart)
