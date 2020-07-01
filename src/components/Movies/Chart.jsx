import React, { createContext, useContext } from "react"
import { dimensionsPropsType } from "components/utils"
import "./Chart.scss"

const ChartContext = createContext()
export const useChartDimensions = () => useContext(ChartContext)

const Chart = ({ hasNoListener, dimensions, children, onMouseMove, onMouseEnter, onMouseLeave }) => (
    <ChartContext.Provider value={dimensions}>
        <svg
            className="Chart"
            width={dimensions.width}
            height={dimensions.height}>

            <g transform={`translate(${dimensions.marginLeft}, ${dimensions.marginTop})`}>
                {children}
            </g>
            {!hasNoListener && (
                <rect
                    className="Chart__listener"
                    x={dimensions.marginLeft}
                    y={dimensions.marginTop}
                    height={dimensions.boundedHeight}
                    width={dimensions.boundedWidth}
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    onMouseEnter={onMouseEnter}
                />
            )}
        </svg>
    </ChartContext.Provider>
)

Chart.propTypes = {
    dimensions: dimensionsPropsType
}

Chart.defaultProps = {
    dimensions: {}
}

export default Chart

// <rect
//     className="Chart__listener"
//     x={margin.left}
//     y={margin.top}
//     height={dimensoions.height}
//     width={dimensions.width}
//     onMouseMove={onMouseMove}
//     onMouseLeave={onMouseLeave}
//     onMouseEnter={onMouseEnter}
// />