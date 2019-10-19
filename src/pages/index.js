import React from "react";
import Intro from "components/Intro/Intro";
import Layout from "components/Layout/Layout";
import SEO from "components/SEO/SEO";

const RenderBody = () => (
    <>
        <Intro/>
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

RenderBody.propTypes = {
};
