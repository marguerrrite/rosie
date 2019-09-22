import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import './PostGoals.scss';

const PostGoals = ({ children, className, goals, title }) => {
    return (
        <div className={classNames(className, "PostGoals")}>
            <h3 className="PostGoal__title">
                {title}
            </h3>
            {goals.map((goal, i) =>
                <div className="PostGoal" key={i}>
                    {goal}
                </div>
            )}
        </div>
    );
};

PostGoals.propTypes = {

};

export default PostGoals;