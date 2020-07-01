import React, { useState } from 'react'
import classNames from "classnames"
import PropTypes from 'prop-types'
import * as d3 from "d3"
import { useChartDimensions } from "components/utils"
import Axis from "components/Movies/Axis"
import Chart from 'components/Movies/Chart'
import Circles from 'components/Movies/Circles'
import './Timeline.scss'

const formatMonths = d3.timeFormat("%B")

const Timeline = ({ data, xAccessor, yAccessor, label, className }) => {
    const [ref, dimensions] = useChartDimensions()
    const [contextRef, timelineContextDimensions] = useChartDimensions({height:100})
    const [isMouseMove, setIsMouseMove] = useState(false)

    const xScale = d3.scaleTime()
        .domain(d3.extent(data, xAccessor))
        .range([0, dimensions.boundedWidth])

    const yScale = d3.scaleLinear()
        .domain([0, 10])
        .range([dimensions.boundedHeight, 0])
        .nice()

    const xScaleContext = d3.scaleTime()
        .domain(d3.extent(data, xAccessor))
        .range([0, timelineContextDimensions.boundedWidth])

    const yScaleContext = d3.scaleLinear()
        .domain([0, 10])
        .range([timelineContextDimensions.boundedHeight, 0])
        .nice()

    const xAccessorScaled = d => xScale(xAccessor(d))
    const yAccessorScaled = d => yScale(yAccessor(d))
    const xAccessorScaledContext = d => xScaleContext(xAccessor(d))
    const yAccessorScaledContext = d => yScaleContext(yAccessor(d))

    const keyAccessor = (d, i) => i

    return (
        <div>
            <div className={classNames("Timeline", className)} ref={ref}>
                <Chart
                    dimensions={dimensions}
                >
                    <Axis
                        dimension="x"
                        scale={xScale}
                        formatTick={formatMonths}
                        numberOfTicks={3}
                        numberOfTicksYear={1}
                    />
                    <Axis
                        dimension="y"
                        scale={yScale}
                        label={label}
                        numberOfTicks={10}
                    />
                    <Circles
                        data={data}
                        keyAccessor={keyAccessor}
                        xAccessor={xAccessorScaled}
                        yAccessor={yAccessorScaled}
                    />
                </Chart>
            </div>
            <div className="TimelineContext" ref={contextRef}>
                <Chart
                    dimensions={timelineContextDimensions}
                >
                    <Circles
                        data={data}
                        keyAccessor={keyAccessor}
                        xAccessor={xAccessorScaledContext}
                        yAccessor={yAccessorScaledContext}
                    />
                </Chart>
            </div>
        </div>
    );
};



export default Timeline;

const Circle = ({ className, cx, cy, style }) => {
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

// const Tooltip = ({ currentHoveredCircleCoords, currentHoveredData, dimensions, selectedExercise }) => {
//     let exercises = ["A", "B", "C", "D"]
//     let date = formatDate(currentHoveredData[0][0])
//     let leftScrubCoord = currentHoveredCircleCoords[0][0] + dimensions.marginLeft
//     let topScrubCoord = dimensions.marginTop

//     return (
//         <div className="Tooltip__container" style={{ opacity: 1, left: `${leftScrubCoord}px`, top: `${topScrubCoord}px` }}>
//             <div className="Tooltip">
//                 <div className="Tooltip__date">
//                     {date}
//                 </div>
//                 <div className="Tooltip__variations">
//                     {currentHoveredData.map((data, i) => (
//                         <div className={classNames("Tooltip__variation", `Tooltip__variation-${[i]}`, { "Tooltip__variation--isDimmed": selectedExercise < 5 && selectedExercise > 0 && selectedExercise !== i + 1 })} key={i}>
//                             <span className="Tooltip__variation__dot"></span>
//                             <div className="Tooltip__variation__name">
//                                 Variation {exercises[i]}
//                             </div>
//                             <span className="Tooltip__variation__change">
//                                 {/* {currentHoveredData[i - 1] && (
//                                     <>
//                                         {currentHoveredData[i - 1][1] - currentHoveredData[i][1]}
//                                     </>
//                                 )} */}
//                             </span>
//                             <span className="Tooltip__variation__bpm">
//                                 {data[1]} bpm
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }