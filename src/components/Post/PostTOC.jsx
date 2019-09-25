import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './PostTOC.scss';

const PostTOC = ({ children, className }) => {
    return (
        <div className={classNames(className, "PostTOC__container")}>
            <div className="PostTOC">
                {children}
            </div>
        </div>
    );
};

PostTOC.propTypes = {

};

export default PostTOC;