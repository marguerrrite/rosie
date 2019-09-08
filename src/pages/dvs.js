import React from "react";
import Layout from "components/Layout/Layout";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import DVSPage from "components/DVS/DVS";

const DVS = () => (
    <Layout
        className="DVS__layout"
        showNavigation={false}
        showFooter={false}>
        <DVSPage/>
    </Layout>
)

export default DVS;

