import React from 'react';
import PropTypes from 'prop-types';
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import Link from "components/_ui/Link/Link";
import Label from "components/_ui/Label/Label";
import SpinningPets from "components/SpinningPets/SpinningPets";
import './Footer.scss';


const Footer = props => {
    return (
        <MaxWidth size="l" className="Footer__container">
            <MaxWidth size="xl" className="Footer">
                <div className="Footer__section Footer__section__links">
                    <Label className="Footer__label">
                        <Link className="Footer__link"
                            doOpenInNewTab
                            to="http://www.github.com/margueriteroth">
                            Github
                        </Link>
                    </Label>
                    <Label className="Footer__label">
                        <Link className="Footer__link"
                            doOpenInNewTab
                            href="http://www.dribbble.com/marrrguerite">
                            Dribbble
                        </Link>
                    </Label>
                    <Label className="Footer__label">
                        <Link className="Footer__link"
                            doOpenInNewTab
                            href="https://giphy.com/channel/marrrguerite">
                            Giphy
                        </Link>
                    </Label>
                    <Label className="Footer__label">
                        <Link className="Footer__link"
                            doOpenInNewTab
                            href="http://codepen.io/marguerite">
                            Codepen
                        </Link>
                    </Label>
                    <Label className="Footer__label">
                        <Link className="Footer__link"
                            doOpenInNewTab
                            href="https://www.instagram.com/marguer.ite">
                            Instagram
                        </Link>
                    </Label>
                    <Label className="Footer__label">
                        <Link className="Footer__link"
                            doOpenInNewTab
                            href="https://www.twitter.com/marrrguerite">
                            Twitter
                        </Link>
                    </Label>
                </div>
                <div className="Footer__section Footer__section__contact">
                    <Link
                        href="mailto:hello@marguerite.io"
                        isButton
                        buttonProps={{ category: "secondary--white" }}
                    >
                        Contact
                    </Link>
                </div>
            </MaxWidth>
            <div className="Footer__pets">
                <SpinningPets />
            </div>
            <div className="Footer__copyright__container">
                <span className="Footer__copyright">
                    &copy; 2019 — </span>
                <Link
                    className="Footer__copyright__link"
                    href="https://github.com/margueriteroth"
                >
                    Designed and developed by Marguerite Roth
                </Link>
            </div>
        </MaxWidth>
    );
};

Footer.propTypes = {

};

export default Footer;