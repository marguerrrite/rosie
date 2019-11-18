import React from "react";
import Layout from "components/Layout/Layout";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import Link from "components/_ui/Link/Link";
import Spinner from "components/_ui/Spinner/Spinner";
import "./404.scss";

const NotFoundPage = () => (
    <Layout>
        <MaxWidth className="NotFound">
            <Spinner
                className="NotFound__spinner__container"
                pet="oscar"
                size="xl"
            />
            <h1 className="NotFound__header">
                Page not found
            </h1>
            <Link to="/#work"
                className="NotFound__button"
                isButton
                buttonProps={{category: "primary", size: "l"}}
            >
                Check out projects
            </Link>
        </MaxWidth>

    </Layout>
)

export default NotFoundPage;