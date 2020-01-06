import React, { createContext, useContext } from "react"
import { dimensionsPropsType } from "components/utils"
import "./Chart.scss"

const ChartContext = createContext()
export const useChartDimensions = () => useContext(ChartContext)


const Chart = ({ dimensions, children, title }) => {
    return (
        <ChartContext.Provider value={dimensions}>
            <svg
                className="ContestantChart Chart"
                width={dimensions.width}
                height={dimensions.height}>


                <g transform={`translate(${dimensions.marginLeft}, ${dimensions.marginTop})`}>
                    {children}
                </g>
            </svg>
        </ChartContext.Provider>
)}

Chart.propTypes = {
    dimensions: dimensionsPropsType
}

Chart.defaultProps = {
    dimensions: {}
}

export default Chart
