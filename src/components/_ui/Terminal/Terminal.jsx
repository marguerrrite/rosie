import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import "./Terminal.scss";

const Terminal = ({children, className, size}) => {
    return (
        <MaxWidth size="xs" className={classNames(className, "Terminal")}>
            <span className="Terminal__root">
                marguerites-mbp:~ marge$
            </span>
        </MaxWidth>
    );
};

export default Terminal;