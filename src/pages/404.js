import React from "react";
import ContestantHead from "components/Bachelor/ContestantHead"
import Label from "components/_ui/Label/Label";
import Layout from "components/Layout/Layout";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import Link from "components/_ui/Link/Link";
import Spinner from "components/_ui/Spinner/Spinner";
import "./404.scss";

const NotFoundPage = () => (
    <Layout showNavigation showSocialCol showFooter>
        <MaxWidth className="NotFound">
            <Spinner
                className="NotFound__spinner__container"
                pet="oscar"
                size="xl"
            />
            <h1 className="NotFound__header">
                Page not found
            </h1>
            <div className="NotFound__recent">
                <div>
                    <Label>
                        Check out my recent project
                    </Label>
                    <Link to="/2020-bachelor" className="NotFound__recent__item NotFound__recent__item--project">
                        <ContestantHead name="Deandra" />
                        <div>
                            <h3>
                                Bachelor 2020 Contestant Guide
                            </h3>
                            <p>
                                Updating weekly with episode information and improved components. Wip!
                            </p>
                        </div>

                    </Link>
                </div>
                <div>
                    <Label>
                        Check out my recent post
                    </Label>
                    <Link to="/blog/set-up-local-website"
                        className="NotFound__recent__item NotFound__recent__item--post">
                        <div>
                            <h3>
                                Set up a local dev environment and run a website
                            </h3>
                            <p>
                                Collect and utilize the tools needed to spin up and edit a website on your computer.
                                Basic HTML/CSS/JS, D3.js, and Twitter Bootstrap starters provided.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </MaxWidth>
    </Layout>
)

export default NotFoundPage;