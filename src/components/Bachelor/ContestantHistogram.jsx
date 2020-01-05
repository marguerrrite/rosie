import React from "react"
import PropTypes from "prop-types"
import classNames from 'classnames'
import * as d3 from "d3"
import _ from "lodash"

import Chart from "components/Bachelor/Chart/Chart"
import Bars from "components/Bachelor/Chart/Bars"
import Axis from "components/Bachelor/Chart/Axis"
import ContestantHead from "components/Bachelor/ContestantHead"
import { useChartDimensions, accessorPropsType, useUniqueId } from "components/utils"
import peterCrownImg from './images/head-peter-crown.png'
import "./ContestantHistogram.scss"

const gradientColors = ["#9980FA", "rgb(226, 222, 243)"]

const ContestantHistogram = ({ className, data, xAccessor, label, contestantAge, contestantName }) => {
    const gradientId = useUniqueId("ContestantHistogram-gradient")
    const [ref, dimensions] = useChartDimensions({
        marginBottom: 60,
        marginRight: 24,
        marginLeft: 0,
        marginTop: 50
    })

    const numberOfThresholds = 9

    const xScale = d3.scaleLinear()
        .domain(d3.extent(data, xAccessor))
        .range([0, dimensions.boundedWidth])
        .nice(numberOfThresholds)

    const binsGenerator = d3.histogram()
        .domain(xScale.domain())
        .value(xAccessor)
        .thresholds(xScale.ticks(numberOfThresholds))

    const bins = binsGenerator(data)

    const yAccessor = d => d.length
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(bins, yAccessor)])
        .range([dimensions.boundedHeight, 0])
        .nice()

    const barPadding = 2

    const xAccessorScaled = d => xScale(d.x0) + barPadding
    const yAccessorScaled = d => yScale(yAccessor(d))
    const widthAccessorScaled = d => xScale(d.x1) - xScale(d.x0) - barPadding
    const heightAccessorScaled = d => dimensions.boundedHeight - yScale(yAccessor(d))
    const keyAccessor = (d, i) => i

    const ageAccessor = d => d.age
    const mean = d3.mean(data.filter(d => d.occupation), ageAccessor)

    return (
        <div className={classNames(className, "ContestantHistogram")} ref={ref}>
            {/* <h6 className="ContestantHistogram__title">
                Contestant Age Distribution
            </h6> */}
            <Chart dimensions={dimensions}>
                <Axis
                    dimensions={dimensions}
                    dimension="x"
                    scale={xScale}
                    label={label}
                />
                {/* <Axis
                    dimensions={dimensions}
                    dimension="y"
                    scale={yScale}
                    label="Count"
                /> */}
                <Bars
                    data={bins}
                    keyAccessor={keyAccessor}
                    xAccessor={xAccessorScaled}
                    yAccessor={yAccessorScaled}
                    widthAccessor={widthAccessorScaled}
                    heightAccessor={heightAccessorScaled}
                    contestantAge={contestantAge}
                />
                {contestantName && (
                    <ContestantHead
                        isSvg
                        showNotch
                        className="ContestantHistogram__head"
                        name={contestantName}
                        x={(xScale(contestantAge)) - 5}
                        y={dimensions.boundedHeight + 20}
                    />
                )}
                {contestantAge != 28 && (
                    <svg
                        x={(xScale(28)) + 11}
                        y={dimensions.boundedHeight + 20} >
                        <path d="M4.5 0L9 4H0L4.5 0Z" fill="#5892f2" />
                    </svg>
                )}
                <image
                    className="ContestantHistogram__peter-head"
                    x={(xScale(28)) - 3}
                    y={contestantAge != 28 ? dimensions.boundedHeight + 23 : dimensions.boundedHeight + 64}
                    width="36"
                    height="36"
                    href={peterCrownImg}
                />
                <line
                    className="ContestantHistogram__mean"
                    x1={xScale(mean)}
                    x2={xScale(mean)}
                    y1={-16}
                    y2={dimensions.boundedHeight}
                />
                <text
                    className="ContestantHistogram__mean__label"
                    x={xScale(mean)}
                    y={-37}
                >
                    Average age:
                </text>
                <text
                    className="ContestantHistogram__mean__age"
                    x={xScale(mean)}
                    y={-22}
                >
                    {mean}
                </text>
            </Chart>
        </div>
    )
}

ContestantHistogram.propTypes = {
    xAccessor: accessorPropsType,
    yAccessor: accessorPropsType,
    xLabel: PropTypes.string,
    yLabel: PropTypes.string,
}

ContestantHistogram.defaultProps = {
    xAccessor: d => d.x,
    yAccessor: d => d.y,
}
export default ContestantHistogram
