import React from "react";
import { graphql } from 'gatsby';
import Intro from "components/Blog/DevTutorial/Part1/Intro";
import Tools from "components/Blog/DevTutorial/Part1/Tools";
import Post from "components/Post/Post";

const PostPartOne = ({ data, path }) => {
    return (
        <Post
            heroImg={data.hero.childImageSharp.fluid}
            goals={goals}
            path={path}
            title="Part 1: Setting up our dev environment and running a site"
            demo="https://sample.marguerite.io"
            repo="https://github.com/margueriteroth/our-new-project"
        >
            <Intro />
            <Tools />
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
    }
`

const goals = [
    "⚒ Get to know the terminal, Node, npm, a server, and text editor.",
    "🙏 Run a local server with our HTML/CSS/JS project"
];