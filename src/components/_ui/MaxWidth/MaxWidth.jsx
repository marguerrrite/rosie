import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import "./MaxWidth.scss";

const MaxWidth = ({children, id, className, size}) => {
    return (
        <div
            id={id}
            className={classNames(className, `MaxWidth MaxWidth--size-${size}`)}>
            {children}
        </div>
    );
};

MaxWidth.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.string,
};

MaxWidth.defaultProps = {
    size: "m",
};

export default MaxWidth;