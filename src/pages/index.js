import React from "react";
import Layout from "components/Layout/Layout";

const RenderBody = () => (
    <>
        <h1>
            Hello world.
        </h1>
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
