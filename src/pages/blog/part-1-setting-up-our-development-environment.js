import React from "react";
import { graphql } from 'gatsby';
import Intro from "components/Blog/DevTutorial/Part1/Intro";
import Post from "components/Post/Post";

const PostPartOne = ({ data, path }) => {
    return (
        <Post heroImg={data.hero.childImageSharp.fluid} path={path}>
            <Intro />
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