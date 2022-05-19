import React from "react"
import PropTypes from "prop-types"
import { accessorPropsType } from "components/utils";

const Brush = ({ data, keyAccessor, xAccessor, yAccessor, radius }) => {
    return (
        <React.Fragment>
            {data.map((d, i) => (
                <circle
                    className="Brush__circle"
                    key={keyAccessor(d, i)}
                    cx={xAccessor(d, i)}
                    cy={yAccessor(d, i)}
                    r={typeof radius == "function" ? radius(d) : radius}
                />
            ))}
        </React.Fragment>
    )
}


Brush.propTypes = {
    data: PropTypes.array,
    keyAccessor: accessorPropsType,
    xAccessor: accessorPropsType,
    yAccessor: accessorPropsType,
    radius: accessorPropsType,
}

Brush.defaultProps = {
    radius: 5,
}

export default Brush
