import React, { useState, useEffect } from "react"
import classNames from 'classnames';
import Link from "components/_ui/Link/Link";
import PropTypes from 'prop-types';
import './PageDetail.scss';


const PageDetail = ({children, className, details}) => {

    return (
        <div
            className="PageDetail__container">
            <div className="PageDetail">
                <div className="PageDetail__item">
                    <div className="PageDetail__item__title">
                        Tools & Tech
                    </div>
                    <div className="PageDetail__item__content">
                        {details.tools}
                    </div>
                </div>
                <div className="PageDetail__item">
                    <div className="PageDetail__item__title">
                        Role
                    </div>
                    <div className="PageDetail__item__content">
                        {details.role}
                    </div>
                </div>
                <div className="PageDetail__item">
                    <div className="PageDetail__item__title">
                        Status
                    </div>
                    <div className="PageDetail__item__content">
                        {details.status}
                    </div>
                </div>
            </div>
        </div>
    );
};

PageDetail.propTypes = {

};

export default PageDetail;