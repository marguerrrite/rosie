import React from "react";
import Intro from "components/Intro/Intro";
import Layout from "components/Layout/Layout";

const RenderBody = () => (
    <>
        <Intro/>
    </>
);

export default () => {
    return (
        <Layout>
            <RenderBody />
        </Layout>
    )
}

RenderBody.propTypes = {
};
