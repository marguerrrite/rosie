import React from "react";
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from "gatsby-image";
import Layout from "components/Layout/Layout";
import './PostMarkdown.scss';

export default ({ data }) => {
    let PostMarkdown = data.mdx
    let featuredImgFluid = PostMarkdown.frontmatter.featuredImage.childImageSharp.fluid
    return (
        <Layout className="PostMarkdown">
            <div>
                <h1>
                    {PostMarkdown.frontmatter.title}
                </h1>
                <h5>
                    Tweet this
                </h5>
                <p>
                    {PostMarkdown.frontmatter.intro}
                </p>
                <Img
                    className="PostMarkdown__hero"
                    fluid={featuredImgFluid}
                />
                <MDXRenderer>{PostMarkdown.body}</MDXRenderer>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        intro
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`