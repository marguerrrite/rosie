import React from "react";
import { graphql } from 'gatsby';
import Img from "gatsby-image";
import Layout from "components/Layout/Layout";
import './PostMarkdown.scss';

export default ({ data }) => {
    let PostMarkdown = data.markdownRemark
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
                <div dangerouslySetInnerHTML={{ __html: PostMarkdown.html }} />
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