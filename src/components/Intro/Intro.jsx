import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import "./Intro.scss";

const Intro = () => {
    return (
        <div className="Intro">
            <h1 className="Intro__header">
                Hello! I’m Marguerite, a designer and developer specializing
                in product design and user experience.
                </h1>
            <h2 className="Intro__subheader">
                I also enjoy messing around with data visualizations. 😊
            </h2>
        </div>
    );
};

export default Intro;