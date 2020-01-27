import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from 'classnames'
import { StaticQuery, graphql } from "gatsby"
import Footer from "components/Footer/Footer"
import SocialCol from "components/SocialCol/SocialCol"
import Header from "components/Header/Header"
import { ModalProvider, Modal } from "components/_ui/Modal/Modal"
import 'styles/globals.scss';

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ className, children, showNavigation, showSocialCol, showFooter, knockoutHeader }) => (
    <StaticQuery
        query={graphql`
            query SITE_TITLE_QUERY {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
            render={data => (
                <ModalProvider>
                    <div className="div">
                        <div className="Layout">
                            {showNavigation && (
                                <Header knockoutHeader={knockoutHeader} />
                            )}
                            {showSocialCol && (
                                <SocialCol />
                            )}
                            <main className={classNames("Layout__content", className)}>
                                {children}
                            </main>
                            {showFooter && (
                                <Footer />
                            )}
                        </div>
                    </div>
                </ModalProvider>
            )}
        />

    )


Layout.propTypes = {
    children: PropTypes.node.isRequired,
    showNavigation: PropTypes.bool,
    showFooter: PropTypes.bool,
    showSocialCol: PropTypes.bool,
}

Layout.defaultProps = {
    showNavigation: false,
    showFooter: false,
    showSocialCol: false,
}

export default Layout;