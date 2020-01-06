import React from "react"
import { useChartDimensions, accessorPropsType, useUniqueId } from "components/utils"
import PropTypes from "prop-types"
import classNames from 'classnames'
import * as d3 from "d3"
import _ from "lodash"
import Chart from "components/Bachelor/Chart/Chart"
import ContestantHead from "components/Bachelor/ContestantHead"
import peterCrownImg from './images/head-peter-crown.png'
import statesJson from './gz_2010_us_040_00_500k_simple.json'
import "./ContestantMap.scss"


const ContestantMap = ({ className, data, contestantAge, contestantName, contestantCoordinates }) => {
    const [ref, dimensions] = useChartDimensions({
        marginBottom: 0,
        marginRight: 0,
        marginLeft: 0,
        marginTop: 0
    })

    const sphere = ({ type: "Sphere" })
    const projection = d3.geoAlbersUsa()
        .fitWidth(dimensions.boundedWidth, sphere)

    const pathGenerator = d3.geoPath(projection)

    let coordinatesLosAngeles = [-118.248405, 33.973951]

    // function linkArc(d) {
    //     var dx = d.target.x - d.source.x,
    //         dy = d.target.y - d.source.y,
    //         dr = Math.sqrt(dx * dx + dy * dy);
    //     return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
    // }

    return (
        <div className={classNames(className, "ContestantMap")} ref={ref}>
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
                <image
                    className="ContestantMap__head ContestantMap__head--peter"
                    x={projection(coordinatesLosAngeles)[0]}
                    y={projection(coordinatesLosAngeles)[1]}
                    width="18"
                    height="18"
                    href={peterCrownImg}
                />
                <ContestantHead
                    isSvg
                    className="ContestantMap__head"
                    name={contestantName}
                    x={projection(contestantCoordinates)[0]}
                    y={contestantName != "Mykenna" ? projection(contestantCoordinates)[1] : projection(contestantCoordinates)[1] - 4}
                />
                <path className="ContestantMap__arc"/>
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
