import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faLinkedinIn, faInstagram, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons'
import Link from "components/_ui/Link/Link"

import "./SocialCol.scss";

const SocialCol = () => {
    return (
        <div className="SocialCol">
            <div className="SocialCol__icons">
                <Link
                    className="SocialCol__icon"
                    doOpenInNewTab
                    to="https://github.com/margueriteroth">
                    <FontAwesomeIcon
                        icon={faGithub}
                         />
                </Link>
                <Link
                    className="SocialCol__icon"
                    doOpenInNewTab
                    to="https://dribbble.com/marrrguerite">
                    <FontAwesomeIcon
                        icon={faDribbble}
                    />
                </Link>
                <Link
                    className="SocialCol__icon"
                    doOpenInNewTab
                    to="https://www.linkedin.com/in/margueriteroth/">
                    <FontAwesomeIcon
                        icon={faLinkedinIn}
                    />
                </Link>
                <Link
                    className="SocialCol__icon"
                    doOpenInNewTab
                    to="https://codepen.io/marguerite/">
                    <FontAwesomeIcon
                        icon={faCodepen}
                         />
                </Link>
                <Link
                    className="SocialCol__icon"
                    doOpenInNewTab
                    to="https://instagram.com/marguer.ite/">
                    <FontAwesomeIcon
                        icon={faInstagram}
                         />
                </Link>
                <Link
                    className="SocialCol__icon"
                    doOpenInNewTab
                    to="https://twitter.com/marrrguerite">
                    <FontAwesomeIcon
                        icon={faTwitter}
                         />
                </Link>
            </div>
        </div>
    );
};

export default SocialCol;