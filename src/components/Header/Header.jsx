import React from "react";
import Headroom from "react-headroom";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import Link from "components/_ui/Link/Link";
import Logo from "components/_ui/Logo/Logo";
import "./Header.scss";

const Header = () => (
    <Headroom className="Header__headroom">
        <MaxWidth size="l" className="Header__container">
            <div className="Header__content">
                <Link className="Header__logo" to="/">
                    <Logo />
                </Link>
                <div className="Header__links">
                    {/* <Link
                        className="Header__link"
                        activeClassName="Header__link--is-active"
                        to="/work">
                        Projects
                    </Link> */}
                    <Link
                        doOpenInNewTab
                        className="Header__link Header__link--email"
                        to="mailto:hello@marguerite.io"
                    >
                        Contact
                        <span>&#8594;</span>
                    </Link>
                </div>
            </div>
        </MaxWidth>
    </Headroom>
)

export default Header;