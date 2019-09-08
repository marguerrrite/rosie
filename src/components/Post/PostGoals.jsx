import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import './PostGoals.scss';

const PostGoals = ({ children, className, goals, title }) => {
    return (
        <MaxWidth size="s" className={classNames(className, "PostGoals")}>
            <h3>
                {title}
            </h3>
            {goals.map((goal, i) =>
                <p key={i}>
                    {goal}
                </p>
            )}
        </MaxWidth>
    );
};

PostGoals.propTypes = {

};

export default PostGoals;