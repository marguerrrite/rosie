import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './PostNote.scss';

const PostNote = ({ children, className, isBlue }) => {
    return (
        <div className={classNames(className, "PostNote", {
            "PostNote--isBlue" : isBlue
        })}>
            {children}
        </div>
    );
};

PostNote.propTypes = {
    isBlue: PropTypes.bool,
}

PostNote.defaultProps = {
    isBlue: false,
}

export default PostNote;