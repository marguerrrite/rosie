import React, { useState } from 'react'
import classNames from "classnames"
import PropTypes from 'prop-types'
import * as d3 from "d3"
import { useChartDimensions, accessorPropsType, useUniqueId } from "./utils"
import Axis from "components/Paradiddle/Axis"
import Chart from 'components/Paradiddle/Chart'
import Line from "components/Paradiddle/Line"
import './Timeline.scss'

const Timeline = ({ data, xAccessor, yAccessor, label }) => {
    const [ref, dimensions] = useChartDimensions();
    const [isMouseMove, setIsMouseMove] = useState(false);
    const [currentHoveredData, setCurrentHoveredData] = useState();
    const [currentHoveredCircleCoords, setCurrentHoveredCircleCoords] = useState();

    const formatDate = d3.timeFormat("%A")

    const xScale = d3.scaleTime()
        .domain(d3.extent(data[0], xAccessor))
        .range([0, dimensions.boundedWidth])

    const yScale = d3.scaleLinear()
        .domain([130, 175])
        .range([dimensions.boundedHeight, 0])

    const xAccessorScaled = d => xScale(xAccessor(d))
    const yAccessorScaled = d => yScale(yAccessor(d))

    const onMouseMove = e => {
        let x = e.clientX - e.currentTarget.getBoundingClientRect().x;
        let y = e.clientY - e.currentTarget.getBoundingClientRect().y;

        const hoveredDate = xScale.invert(x);

        const getDistanceFromHoveredDate = d => Math.abs(
            xAccessor(d) - hoveredDate
        )

        const closestIndex = d3.scan(data[0], (a, b) => (
            getDistanceFromHoveredDate(a) - getDistanceFromHoveredDate(b)
        ))

        // const closestDataPoint = data[0][closestIndex]
        // const closestXValue = xAccessor(closestDataPoint) //snag the data text for the tooltip
        // const closestYValue = yAccessor(closestDataPoint)

        let closestDataPoints = []
        for (let i=0; i < data.length; i++) {
            closestDataPoints.push(data[i][closestIndex])
        }

        let circleCoords = []
        let closestValues = []
        for (let j=0; j < closestDataPoints.length; j++) {
            let closestXVal = xAccessor(closestDataPoints[j])
            let closestYVal = yAccessor(closestDataPoints[j])

            closestValues.push([closestXVal, closestYVal])
            circleCoords.push([xScale(closestXVal), yScale(closestYVal)])
        }

        setIsMouseMove(true)
        setCurrentHoveredData(closestValues)
        setCurrentHoveredCircleCoords(circleCoords)
    }

    const onMouseEnter = e => {
        //console.log("onMouseEnter")
    }

    const onMouseLeave = e => {
        //console.log("onMouseLeave")
        setIsMouseMove(false)
    }

    return (
        <div className="Timeline" ref={ref}>
            <Chart
                dimensions={dimensions}
                onMouseMove={onMouseMove}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <Axis
                    dimension="x"
                    scale={xScale}
                    formatTick={formatDate}
                />
                <Axis
                    dimension="y"
                    scale={yScale}
                    label={label}
                />

                {isMouseMove && (
                    <rect
                        className="Timeline__hover-line Timeline__hover-line--vertical"
                        width="1"
                        x={currentHoveredCircleCoords[0][0]}
                        y={0}
                        height={dimensions.boundedHeight}
                        style={{ opacity: (isMouseMove ? 1 : 0) }}
                    />
                )}

                {data.map((line, i) => (
                    <Line
                        className={`Line--exercise-${i}`}
                        key={i}
                        data={line}
                        xAccessor={xAccessorScaled}
                        yAccessor={yAccessorScaled}
                    />
                ))}

                {isMouseMove && (
                    <>
                        {data.map((circle, i) => (
                            <Circle
                                className={`Circle--exercise-${i}`}
                                key={i}
                                cx={currentHoveredCircleCoords[i][0]}
                                cy={currentHoveredCircleCoords[i][1]}
                                style={{ opacity: (isMouseMove ? 1 : 0) }}
                            />
                        ))}
                    </>
                )}

            </Chart>
        </div>
    );
};

Timeline.propTypes = {

};

export default Timeline;

const Circle = ({ className, cx, cy, style}) => {
    return (
        <circle className={classNames("Circle", className)}
            r={5}
            fill="red"
            cx={cx}
            cy={cy}
            style={style}
        />
    )
}