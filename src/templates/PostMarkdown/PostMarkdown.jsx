import React from "react";
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { TwitterShareButton, TwitterIcon } from "react-share";
import Emoji from "components/_ui/Emoji/Emoji";
import Img from "gatsby-image";
import Layout from "components/Layout/Layout";
import './PostMarkdown.scss';

export default ({ data, path }) => {
    let PostMarkdown = data.mdx
    let featuredImgFluid = PostMarkdown.frontmatter.featuredImage.childImageSharp.fluid
    return (
        <Layout className="PostMarkdown">
            <div>
                <h1>
                    {PostMarkdown.frontmatter.title}
                </h1>
                <div className="PostMarkdown__metas">
                    <div className="Post__date">
                        {PostMarkdown.frontmatter.date}
                    </div>
                    <div className="PostMarkdown__social">
                        <TwitterShareButton
                            url={`https://marguerite.io${path}`}
                            title={PostMarkdown.frontmatter.title}
                            className="PostMarkdown__social__share-button">
                            <span>
                                Tweet me!
                            </span>
                            <TwitterIcon
                                className="PostMarkdown__social__icon"
                                size={32}
                                round />
                        </TwitterShareButton>
                    </div>
                </div>
                <div className="PostMarkdown__intro">
                    {PostMarkdown.frontmatter.intro}
                </div>
                <Img
                    className="PostMarkdown__hero"
                    fluid={featuredImgFluid}
                />
                <div className="PostMarkdown__content">
                    <MDXRenderer>
                        {PostMarkdown.body}
                    </MDXRenderer>
                </div>
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
        date(formatString: "MMMM D, YYYY")
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