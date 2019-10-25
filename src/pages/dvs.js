import React from "react";
import Layout from "components/Layout/Layout";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import DVSPage from "components/DVS/DVS";
import SEO from "components/SEO/SEO";

const DVS = () => (
    <Layout
        className="DVS__layout"
        showSocialCol={false}
        showNavigation={false}
        showFooter={false}>
        <SEO title="Data Visualization Society: Challenge #1" />
        <DVSPage/>
    </Layout>
)

export default DVS;

