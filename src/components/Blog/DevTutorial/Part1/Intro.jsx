import React from "react";
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image";
import { TwitterShareButton, TwitterIcon } from "react-share";


const Intro = ({ data }) => {
    return (
        <StaticQuery
            query={DEV_TUT_PART_1_INTRO}
            render={data => (
                <div>
                    <h1>
                        Part 1: Setting up our dev environment and running a site
                    </h1>
                    <div className="Post__metas">
                        <div className="Post__date">
                            September 10, 2019
                        </div>
                        <div className="Post__social">

                            <TwitterShareButton
                                url={"https://marguerite.io"}
                                title={"Part 1: Setting up our dev environment and running a site"}
                                className="Post__social__share-button">
                                <span>Tweet this!</span>
                                <TwitterIcon
                                    size={32}
                                    round />
                            </TwitterShareButton>
                        </div>
                    </div>
                    <div className="Post__clump">
                        <p>
                            Setting up a local web development environment allows you to play with new tools, languages, and any kind of project you're working on without having to deploy publicly.
                        </p>
                    </div>
                    <div className="Post__clump">
                        <Img
                            className="Post__image Post__image--size-xl"
                            fluid={data.hero.childImageSharp.fluid}
                            objectFit="cover"
                            objectPosition="50% 50%"
                            alt="Desktop shoping terminal, text editor, and demo project website."
                        />
                    </div>
                    <div className="Post__clump">
                        <p>
                            In <strong>Part 1</strong> of this tutorial, we will collect the tools needed to spin up and edit a website. By the end, you will have a local environment set up and the space needed to start working on a project. 👏
                        </p>
                    </div>
                    <div className="Post__clump">
                        <h2>
                            Who this is for
                        </h2>
                        <p>
                            You might be a:
                        </p>
                        <ul>
                            <li>
                                Designer
                            </li>
                            <li>
                                Data Scientist
                            </li>
                            <li>
                                Web Developer
                            </li>
                            <li>
                                Interested person at any skill level looking to create a website (Welcome! 🎉)
                            </li>
                        </ul>
                    </div>
                    <div className="Post__clump">
                        <p>
                            This tutorial is broken down into three parts:
                        </p>
                        <ul>
                            <li>
                                <strong>Part 1:</strong> Setting up our environment and running a project locally in our browser (You are here! 🏁)
                            </li>
                            <li>
                                <strong>Part 2:</strong> Committing our work to Github
                            </li>
                            <li>
                                <strong>Part 3:</strong> Deploying with Netlify
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        />
    );
};

Intro.propTypes = {

};

export default Intro;

export const DEV_TUT_PART_1_INTRO = graphql`
    query {
        hero: file(relativePath: { eq: "2019-0918-part-1/hero.png" }) {
            childImageSharp {
                fluid(maxWidth: 2500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
   }
`