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
            <div className="Footer__pets">
                <SpinningPets />
            </div>
            {/* <div className="Footer__copyright__container">
                <span className="Footer__copyright">
                    &copy; 2019 — </span>
                <Link
                    className="Footer__copyright__link"
                    href="https://github.com/margueriteroth"
                >
                    Designed and developed by Marguerite Roth
                </Link>
            </div> */}
        </MaxWidth>
    );
};

Footer.propTypes = {

};

export default Footer;