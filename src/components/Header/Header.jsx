import React from "react";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import { Link } from "gatsby";
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
                    activeClassName="Link--is-active"
                    to="/work">
                    Work
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/blog">
                    Blog
                </Link>
                {/* <Link to="/">
                    About me
                </Link> */}
                <Link to="/">
                    Contact
                </Link>
            </div>
        </div>
    </MaxWidth>
)

export default Header;