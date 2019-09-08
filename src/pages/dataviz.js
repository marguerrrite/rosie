import React from "react";
import Layout from "components/Layout/Layout";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import DVS from "components/DVS/DVS";

const DataViz = () => (
    <Layout
        className="DVS__layout"
        showNavigation={false}
        showFooter={false}>
        <DVS/>
    </Layout>
)

export default DataViz;

