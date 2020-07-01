import React from "react";
import Layout from "components/Layout/Layout"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import MoviesContainer from "components/Movies/MoviesContainer"

const MoviesPage = () => (
    <Layout>
        <MaxWidth className="">
            <h1>
                Movies Watched
            </h1>
            <MoviesContainer/>
        </MaxWidth>
    </Layout>
)

export default MoviesPage;