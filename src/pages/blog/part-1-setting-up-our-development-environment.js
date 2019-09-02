import React from "react";
import { graphql } from 'gatsby';
import Img from "gatsby-image";
import Link from "components/_ui/Link/Link";
import Post from "components/Post/Post";
import "./part-1-setting-up-our-development-environment.scss";

const PostPartOne = ({ data }) => {
    return (
        <Post className="Post-part1">
            <h1>
                Part 1: Setting up our dev environment and running a site
            </h1>
            <div className="Post__clump">
                <p>
                    Setting up a local web development environment allows you to play with new tools, languages, and any kind of project you're working on without having to deploy publicly.
                </p>
            </div>
            <div className="Post__clump">
                <Img
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
            <div className="Post__clump">
                <p>
                    We will be tackling a pure HTML, CSS, and JavaScript project - not incorporating any frontend frameworks like <Link to="https://reactjs.org/" doOpenInNewTab>React</Link>, <Link to="https://vuejs.org/" doOpenInNewTab>Vue</Link>Vue, or <Link to="https://angular.io/" doOpenInNewTab>Angular</Link>. We'll save those for a rainy day.
                </p>
            </div>
            <div className="Post__clump">
                <p className="Post--style-ital">
                    This tutorial shows a macOS environment, but you can apply the methods to other operating systems.
                </p>
                <p>
                    Let's go! 🚀
                </p>
            </div>
            <div className="Post__clump">
                <h2>
                    Tools and files
                </h2>
                <ul>
                    <li>
                        <strong>Terminal:</strong> iTerm2 <i>(optional)</i>
                    </li>
                    <li>
                        <strong>Node and npm</strong>
                    </li>
                    <li>
                        <strong>Server:</strong> Live Server
                    </li>
                    <li>
                        <strong>Text editor:</strong> Visual Studio Code
                    </li>
                    <li>
                        <strong>Sample project:</strong> HTML, CSS, and JavaScript files <i>(optional)</i>
                    </li>
                </ul>
            </div>
            <div className="Post__clump">
                <h2>
                    Terminal commands used in this tutorial
                </h2>
                <p>
                    bees
                </p>
            </div>
            <div className="Post__clump">
                <h2>
                    Terminal: <Link to="https://www.iterm2.com/index.html" doOpenInNewTab>iTerm2</Link> <i>(optional)</i>
                </h2>
                <p>
                    <i>Feel free to skip installing iTerm2. Your default Terminal will work for this tutorial.</i>
                </p>
                <Img
                    className="Post__image--size-l"
                    fluid={data.itermHomepage.childImageSharp.fluid}
                    alt="iTerm2 homepage"
                />
            </div>
            <div className="Post__clump">
                <p>
                    iTerm2 is a replacement for the Terminal that comes installed on your macOS machine. Here is a deep dive on what iTerm2 has to offer. 
                </p>
                <p>
                    To install, head to <Link to="https://www.iterm2.com/" doOpenInNewTab>https://www.iterm2.com/</Link>, download, and follow the installation instructions.
                </p>
            </div>
        </Post>
    )
}

export default PostPartOne;

export const query = graphql`
    query {
        hero: file(relativePath: { eq: "2019-0918-part-1/hero.png" }) {
            childImageSharp {
                fluid(maxWidth: 2500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        itermHomepage: file(relativePath: { eq: "2019-0918-part-1/iterm-homepage.png" }) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
   }
`