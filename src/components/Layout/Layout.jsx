import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import { StaticQuery, graphql } from "gatsby";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import 'styles/globals.scss';

const Layout = ({ className, children, showNavigation, showFooter }) => (
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
            <div className="div">
                <div className="Layout">
                    {showNavigation && (
                        <Header />
                    )}
                    <main className={classNames("Layout__content", className)}>
                        {children}
                    </main>
                    {/* {showFooter && (
                        <Footer />
                    )} */}
                </div>
            </div>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    showNavigation: PropTypes.bool,
    showFooter: PropTypes.bool,
}

Layout.defaultProps = {
    showNavigation: true,
    showFooter: true,
}

export default Layout;
