// Emoji component by Amelia Wattenberger | github.com/wattenberger | @wattenberger

import React from "react";
import PropTypes from "prop-types";
import emojiMap from './emojiMap.jsx';
import './Emoji.scss';

const Emoji = ({ name, className, ...props }) => {
    const emojiUrl = emojiMap[name]

    return (
        <img
            alt={emojiUrl}
            className={[
                "Emoji",
                className
            ].join(" ")}
            src={emojiUrl}
            {...props}
        />
    );
};

Emoji.propTypes = {
    name: PropTypes.oneOf([
        ...Object.keys(emojiMap),
    ]),
};

Emoji.defaultProps = {
};

export default Emoji;
