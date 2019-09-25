import React from 'react';
import classNames from 'classnames';
import Link from "components/_ui/Link/Link";
import PropTypes from 'prop-types';
import './PostLinks.scss';

const PostLinks = ({ demo, repo, children, className }) => {
    return (
        <div className={classNames(className, "PostLinks__container")}>
            <div className="PostLinks">
                {demo && (
                    <Link
                        className="PostLinks__link PostLinks__link__button"
                        doOpenInNewTab
                        isButton
                        to={demo}>
                        Demo site
                    </Link>
                )}
                {repo && (
                    <Link
                        className="PostLinks__link"
                        doOpenInNewTab
                        to={repo}>
                        Github repo
                    </Link>
                )}
            </div>
        </div>
    );
};

PostLinks.propTypes = {

};

export default PostLinks;