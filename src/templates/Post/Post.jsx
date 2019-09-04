import React from "react";
import { graphql } from 'gatsby';
import Img from "gatsby-image";
import Layout from "components/Layout/Layout";
import './Post.scss';

export default ({ data }) => {
    let post = data.markdownRemark
    let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
    return (
        <Layout className="Post">
            <div>
                <h1>
                    {post.frontmatter.title}
                </h1>
                <h5>
                    Tweet this
                </h5>
                <p>
                    {post.frontmatter.intro}
                </p>
                <Img
                    className="Post__hero"
                    fluid={featuredImgFluid}
                />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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