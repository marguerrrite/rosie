import React from 'react';
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import "./Intro.scss";

const Intro = () => {
    return (
        <MaxWidth size="s" className="Intro">
            <h2>
                Hello! 🌭
            </h2>
            <h1 className="Intro__header">
                I’m Marguerite Roth.
                <br/>
                I create things for the web.
            </h1>
            <h3 className="Intro__subheader">
                I'm a frontend designer and developer
                specializing in building exceptional,
                high-quality analytics products. I also
                mess around with data visualizations :)
            </h3>
        </MaxWidth>
    );
};

export default Intro;