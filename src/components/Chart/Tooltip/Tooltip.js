import React from 'react';
import './Tooltip.css'

export default ({ hoveredBar, scales }) => {
    const { xScale, yScale } = scales
    const styles = {
        left: `${xScale(hoveredBar.date_start_time_conv) - 30}px`,
        top: `${yScale(hoveredBar.randomY) + 200}px`
    }

    return (
        <div className="Tooltip" style={styles}>
            TOOLTIP
        </div>
    )
}