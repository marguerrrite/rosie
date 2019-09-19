import React from "react";
import classNames from 'classnames';
import "./Logo.scss";

const Logo = ({className}) => (
    <div className={classNames("Logo", className)}>
        <span className="Logo__dot Logo__dot--yellow"></span>
        <span className="Logo__dot Logo__dot--magenta"></span>
        <div className="Logo__type">
            M
        </div>
    </div>
);

export default Logo;