import React from 'react';
import classNames from 'classnames';
import Link from "components/_ui/Link/Link";
import PropTypes from 'prop-types';
import './PostSidebar.scss';

const PostSidebar = ({ demo, repo, children, className }) => {
    return (
        <div className={classNames(className, "PostSidebar__container")}>
            <div className="PostSidebar">
                {demo && (
                    <Link
                        className="PostSidebar__link PostSidebar__link__button"
                        doOpenInNewTab
                        isButton
                        to={demo}>
                        Demo site
                    </Link>
                )}
                {repo && (
                    <Link
                        className="PostSidebar__link"
                        doOpenInNewTab
                        to={repo}>
                        Github repo
                    </Link>
                )}
            </div>
        </div>
    );
};

PostSidebar.propTypes = {

};

export default PostSidebar;