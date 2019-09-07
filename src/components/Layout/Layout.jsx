import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import { StaticQuery, graphql } from "gatsby";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import 'styles/globals.scss';

const Layout = ({ className, children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
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
                    <Header />
                    <main className={classNames("Layout__content", className)}>
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
