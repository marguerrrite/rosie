import React from "react"
import Layout from "components/Layout/Layout"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import SEO from "components/SEO/SEO"

const Writing = () => (
    <Layout className="Layout__writing" showNavigation showSocialCol showFooter>
        <SEO title="Writing" />
        <MaxWidth>
            <h1>
                Writing
            </h1>
        </MaxWidth>
    </Layout>
);

export default Writing;