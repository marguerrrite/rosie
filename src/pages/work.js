import React from "react";
import Layout from "components/Layout/Layout";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import BookshelfContainer from "components/Bookshelf/BookshelfContainer";

const Work = () => (
    <Layout>
        <MaxWidth>
            <h1>
                Work
            </h1>
            <BookshelfContainer/>
        </MaxWidth>
    </Layout>
)

export default Work;