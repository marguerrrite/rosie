import React from "react";
import classNames from "classnames"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import Link from "components/_ui/Link/Link"
import Logo from "components/_ui/Logo/Logo"
import "./Header.scss";

const Header = ({ knockoutHeader }) => (
    <Headroom className="Header__headroom">
        <MaxWidth size="l" className={classNames("Header__container", {
            "Header__container--knockoutColors" : knockoutHeader
        })}>
            <div className="Header__content">
                <Link className="Header__logo" to="/">
                    <Logo />
                </Link>
                <div className="Header__links">
                    <Link
                        className="Header__link"
                        to={'/#work'}
                    >
                        Work
                    </Link>
                    <Link
                        className="Header__link"
                        to={'/blog'}
                    >
                        Blog
                    </Link>
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

Header.propTypes = {
    knockoutHeader: PropTypes.bool,
}

Header.defaultProps = {
    knockoutHeader: false,
}

export default Header