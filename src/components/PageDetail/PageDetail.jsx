import React from "react"
import Link from "components/_ui/Link/Link";
import PropTypes from 'prop-types';
import './PageDetail.scss';


const PageDetail = ({details, page}) => {
    return (
        <div
            className="PageDetail__container">
            <div className="PageDetail">
                {page !== 'currents' ? (
                    <>
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
                    </>
                ) : (
                    <>
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
                                    Team Members
                                </div>
                                <div className="PageDetail__item__list">
                                    <div className="PageDetail__item__content">
                                        <Link className="PageDetail__item__team__title"
                                            to="https://wattenberger.com"
                                        >
                                            Amelia Wattenberger
                                        </Link>
                                        <div className="PageDetail__item__team__role">
                                            Project Lead, Sr. Frontend Engineer,
                                            Designer
                                        </div>
                                    </div>
                                    <div className="PageDetail__item__content">
                                        <div className="PageDetail__item__team__title">
                                            Sal Gionfriddo
                                        </div>
                                        <div className="PageDetail__item__team__role">
                                            Frontend Lead
                                        </div>
                                    </div>
                                    <div className="PageDetail__item__content">
                                        <div className="PageDetail__item__team__title">
                                            Conrad Lee
                                        </div>
                                        <div className="PageDetail__item__team__role">
                                            Sr. Machine Learning Engineer
                                        </div>
                                    </div>
                                    <div className="PageDetail__item__content">
                                        <div className="PageDetail__item__team__title">
                                            Matthew Carrigan
                                        </div>
                                        <div className="PageDetail__item__team__role">
                                            Machine Learning Engineer
                                        </div>
                                    </div>
                                    <div className="PageDetail__item__content">
                                        <div className="PageDetail__item__team__title">
                                            Mike Sukmanowsky
                                        </div>
                                        <div className="PageDetail__item__team__role">
                                            Product Manager
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </>
                )}

            </div>
        </div>
    );
};

PageDetail.propTypes = {
    details: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    page: PropTypes.string,
};

export default PageDetail;