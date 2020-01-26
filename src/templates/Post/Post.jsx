import React from "react"
import { graphql } from 'gatsby'
import classNames from 'classnames'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Label from 'components/_ui/Label/Label'
import Layout from "components/Layout/Layout"
import Link from 'components/_ui/Link/Link'
import PageAuthor from 'components/PageAuthor/PageAuthor'
import PageHero from 'components/PageHero/PageHero'
import Objectives from 'components/Objectives/Objectives'
import MaxWidth from 'components/_ui/MaxWidth/MaxWidth'
import TOC from 'components/TOC/TOC'
import SEO from "components/SEO/SEO"
import './Post.scss'

export default ({ data }) => {
    let Post = data.mdx
    let slug = Post.frontmatter.slug
    let featuredImgFluid = Post.frontmatter.featuredImage.childImageSharp.fluid

    let goals = Post.frontmatter.goals.childMdx

    return (
        <>
            <SEO
                title={`${Post.frontmatter.title}`}
            />
            <Layout knockoutHeader showNavigation showFooter className={classNames("Post", `Post--${Post.frontmatter.slug}`)}>
                <div>
                    <MaxWidth className="Post__hero" size="xl">
                        <div className="Post__hero__content">
                            <Label className="Post__hero__label" category="primary">
                                <Link className="Post__hero__label__link" to={'/blog'}>
                                    Blog </Link>
                            </Label>
                            <h1 className="Post__hero__title">
                                {Post.frontmatter.title}
                            </h1>
                        </div>
                    </MaxWidth>


                    {/* {Post.frontmatter.description && (
                        <h2 className="Post__hero__description">
                            {Post.frontmatter.description}
                        </h2>
                    )} */}

                    {/* <PageHero
                        className="Post__hero__image"
                        page={slug}
                        image={featuredImgFluid}
                    /> */}

                    <MaxWidth size="l" className="Post__content__container">
                        <div className="Post__content">
                            <div></div>
                            <div className="Post__content__body">
                                <Objectives objectives={goals.body} />
                                <MDXRenderer>
                                    {Post.body}
                                </MDXRenderer>
                            </div>
                            <TOC
                                className="Post__content__TOC"
                            />
                        </div>
                        <PageAuthor className="Post__author"/>
                    </MaxWidth>
                </div>
            </Layout>
        </>

    )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
      frontmatter {
        slug
        isFeatured
        title
        intro
        section
        goals {
          childMdx {
            body
          }
        }
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