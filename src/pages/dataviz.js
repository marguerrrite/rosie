import React from "react";
import Layout from "components/Layout/Layout";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import DVS from "components/DVS/DVS";

const DataViz = () => (
    <Layout>
        <MaxWidth>
           <h1>
               DVS
           </h1>
        </MaxWidth>
        <DVS/>
    </Layout>
)

export default DataViz;

