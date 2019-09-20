import React from 'react';
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import "./Intro.scss";

const Intro = () => {
    return (
        <MaxWidth className="Intro">
            <h1 className="Intro__header">
                Hello! I’m Marguerite, a designer and developer specializing
                in product design and user experience.
                </h1>
            <h2 className="Intro__subheader">
                I also enjoy messing around with data visualizations. [wip 😊]
            </h2>
        </MaxWidth>
    );
};

export default Intro;