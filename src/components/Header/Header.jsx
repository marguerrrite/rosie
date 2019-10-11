import React from "react";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import Link from "components/_ui/Link/Link";
import Logo from "components/_ui/Logo/Logo";
import "./Header.scss";

const Header = () => (
    <MaxWidth size="l" className="Header__container">
        <div className="Header__content">
            <Link className="Header__logo" to="/">
                <Logo/>
            </Link>
            <div className="Header__links">
                <Link
                    className="Header__link"
                    activeClassName="Header__link--is-active"
                    to="/work">
                    Projects
                </Link>
                <Link
                    className="Header__link Header__link--email"
                    to="mailto:hello@marguerite.io"
                    doOpenInNewTab>
                    Email
                    <span>&#8594;</span>
                </Link>
            </div>
        </div>
    </MaxWidth>
)

export default Header;