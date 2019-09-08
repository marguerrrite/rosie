import React from 'react';
import Axis from 'components/Chart/Axis/Axis';

export default ({ scales, margins, svgDimensions }) => {
    const { height } = svgDimensions

    const xProps = {
        orient: 'Bottom',
        scale: scales.xScale,
        translate: `translate(0, ${height - margins.bottom})`,
        //tickSize: height - margins.top - margins.bottom,
    }

    // const yProps = {
    //     orient: 'Left',
    //     scale: scales.yScale,
    //     translate: `translate(${margins.left}, 0)`,
    //     tickFormat: "",
    //     tickValues: "[]",

    //     tickSize: width - margins.left - margins.right,
    // }

    return (
        <g>
            <Axis {...xProps} />
            {/* <Axis {...yProps} /> */}
        </g>
    )
}