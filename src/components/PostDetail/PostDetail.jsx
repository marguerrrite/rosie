import React from "react"
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from "components/_ui/Link/Link"
import PropTypes from 'prop-types';
import './PostDetail.scss';


const PostDetail = ({date, demoUrl, projectRepo, className}) => {
    return (
        <div
            className={classNames("PostDetail__container", className)}>
            <div className="PostDetail">
                <div className="PostDetail__item">
                    <Link
                        className="PostDetail__item__button"
                        isButton
                        doOpenInNewTab
                        to={demoUrl}>
                        Starter Demo
                    </Link>
                    <Link
                        className="PostDetail__item__ga-link"
                        doOpenInNewTab
                        to={projectRepo}>
                        <FontAwesomeIcon
                            className="PostDetail__item__ga-link__icon"
                            icon={faGithub}
                        />
                        Project Github files
                    </Link>
                </div>
                <div className="PostDetail__item">
                    <div className="PostDetail__item__date">
                        Updated {date}
                    </div>
                </div>
            </div>
        </div>
    );
};

PostDetail.propTypes = {
};

export default PostDetail;