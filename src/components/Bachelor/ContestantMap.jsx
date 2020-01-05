import React from "react"
import { useChartDimensions, accessorPropsType, useUniqueId } from "components/utils"
import PropTypes from "prop-types"
import classNames from 'classnames'
import * as d3 from "d3"
import { geoMercator, geoPath } from "d3-geo";
import _ from "lodash"

import Chart from "components/Bachelor/Chart/Chart"

import ContestantHead from "components/Bachelor/ContestantHead"
import peterCrownImg from './images/head-peter-crown.png'
import statesJson from './gz_2010_us_040_00_500k_simple.json'
import "./ContestantMap.scss"


const ContestantMap = ({ className, data, contestantAge, contestantName, contestantCoordinates }) => {
    const [ref, dimensions] = useChartDimensions({
        marginBottom: 30,
        marginRight: 24,
        marginLeft: 0,
        marginTop: 30
    })

    const sphere = ({ type: "Sphere" })
    const projection = d3.geoAlbersUsa()
        .fitWidth(dimensions.boundedWidth, sphere)

    const pathGenerator = d3.geoPath(projection)


    return (
        <div className={classNames(className, "ContestantMap")} ref={ref}>
            <h6 className="ContestantMap__title">
                Map
            </h6>
            <Chart dimensions={dimensions}>
                <g className="ContestantMap__states">
                    {statesJson.features.map((d, i) => (
                        <path
                            key={`path-${i}`}
                            d={pathGenerator(d)}
                            className="ContestantMap__state"
                        />
                    ))}
                </g>
                <ContestantHead
                    isSvg
                    className="ContestantMap__head"
                    name={contestantName}
                    x={projection(contestantCoordinates)[0]}
                    y={projection(contestantCoordinates)[1]}
                />
            </Chart>
        </div>
    )
}

ContestantMap.propTypes = {
    xAccessor: accessorPropsType,
    yAccessor: accessorPropsType,
    xLabel: PropTypes.string,
    yLabel: PropTypes.string,
}

ContestantMap.defaultProps = {
    xAccessor: d => d.x,
    yAccessor: d => d.y,
}
export default ContestantMap
