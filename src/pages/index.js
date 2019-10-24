import React from "react"
import Intro from "components/Intro/Intro"
import Layout from "components/Layout/Layout"
import SocialCol from "components/SocialCol/SocialCol"
import SEO from "components/SEO/SEO"

const RenderBody = () => (
    <>
        <Intro />
    </>
);

export default () => {
    return (
        <Layout>
            <SEO />
            <RenderBody />
        </Layout>
    )
}
