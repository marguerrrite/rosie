import React from "react";
import Layout from "components/Layout/Layout";
import DVSPage from "components/DVS/DVS";
import SEO from "components/SEO/SEO";

const DVS = () => (
    <Layout
        className="DVS__layout">
        <SEO title="Data Visualization Society: Challenge #1" />
        <DVSPage/>
    </Layout>
)

export default DVS;

