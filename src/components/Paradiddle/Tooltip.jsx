import React, { useState } from "react";
import './Tooltip.scss'

const tooltipContext = React.createContext();

function useTooltip() {
    const [tooltip, setTooltip] = useState(false);

    return { tooltip, setTooltip };
}

export { useTooltip, tooltipContext };