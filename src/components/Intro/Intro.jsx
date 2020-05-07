import React from "react"
import Link from "components/_ui/Link/Link";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";

import "./Intro.scss";

const Intro = () => {
    return (
        <MaxWidth
            size="m"
            className="Intro"
        >
            <h2 className="Intro__greeting">
                Hello! <span className="emoji" role="img" aria-label="Emoji hotdog">🌭</span>
            </h2>
            <h1 className="Intro__header">
                I’m Marguerite Roth.
                <br/>
                I create things for the web.
            </h1>
            <h3 className="Intro__subheader">
                I'm a frontend designer and developer
                specializing in building analytics products.
                I also mess around with data visualizations.
                {/* <span className="emoji" role="img" aria-label="Emoji smile">😊</span> */}
            </h3>
            <Link
                doOpenInNewTab
                isButton
                className="Intro__button"
                buttonProps={{size: "xl", color: "white-blue-stroke"}}
                to="mailto:hello@marguerite.io"
            >
                Get in touch
            </Link>
        </MaxWidth>
    );
};

export default Intro;