import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames";
import * as d3 from 'd3'
import { dimensionsPropsType } from "components/utils";
import { useChartDimensions } from "./Chart";

const axisComponentsByDimension = {
    x: AxisHorizontal,
    y: AxisVertical,
}
const Axis = ({ dimension, ...props }) => {
    const dimensions = useChartDimensions()
    const Component = axisComponentsByDimension[dimension]
    if (!Component) return null

    return (
        <Component
            dimensions={dimensions}
            {...props}
        />
    )
}

Axis.propTypes = {
    dimension: PropTypes.oneOf(["x", "y"]),
    dimensions: dimensionsPropsType,
    numberOfTicks: PropTypes.number,
    scale: PropTypes.func,
    label: PropTypes.string,
    formatTick: PropTypes.func,
}

Axis.defaultProps = {
    dimension: "x",
    scale: null,
    formatTick: d3.format(","),
    numberOfTicks: 14,
}

export default Axis

const formatYears = d3.timeFormat("%Y")

function AxisHorizontal({ className, dimensions, label, formatTick, scale, numberOfTicks, numberOfTicksYear, ...props }) {
    const ticks = scale.ticks(numberOfTicks)
    const ticksYears = scale.ticks(numberOfTicksYear)

    return (
        <g
            className={classNames("Axis AxisHorizontal", className)}
            transform={`translate(0, ${dimensions.boundedHeight})`} {...props}>
            <line
                className="Axis__line"
                x2={dimensions.boundedWidth}
            />

            {ticks.map((tick, i) => (
                <text
                    key={tick}
                    className="Axis__tick"
                    transform={`translate(${scale(tick)}, 25)`}
                >
                    {formatTick(tick)}
                </text>
            ))}

            {ticksYears.map((tick, i) => (
                <text
                    key={tick}
                    className="Axis__tick Axis__tick__year"
                    transform={`translate(${scale(tick)}, 41)`}
                >
                    {formatYears(tick)}
                </text>
            ))}

            {label && (
                <text
                    className="Axis__label"
                    transform={`translate(${dimensions.boundedWidth / 2}, 60)`}
                >
                    {label}
                </text>
            )}
        </g>
    )
}

function AxisVertical({ dimensions, label, formatTick, scale, numberOfTicks, ...props }) {
    //const numberOfTicks = dimensions.boundedHeight / 70

    const ticks = scale.ticks(numberOfTicks)

    return (
        <g className="Axis AxisVertical" {...props}>
            <line
                className="Axis__line"
                y2={dimensions.boundedHeight}
            />

            {ticks.map((tick, i) => (
                <text
                    key={tick}
                    className="Axis__tick"
                    transform={`translate(-26, ${scale(tick)})`}
                >
                    {formatTick(tick)}
                </text>
            ))}

            {label && (
                <text
                    className="Axis__label"
                    style={{
                        transform: `translate(-56px, ${dimensions.boundedHeight / 2}px) rotate(-90deg)`
                    }}
                >
                    {label}
                </text>
            )}
        </g>
    )
}
