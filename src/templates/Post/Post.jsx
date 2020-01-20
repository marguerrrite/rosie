import React from "react"
import { graphql } from 'gatsby'
import classNames from 'classnames'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Label from 'components/_ui/Label/Label'
import Layout from "components/Layout/Layout"
import Link from 'components/_ui/Link/Link'
import PageHero from 'components/PageHero/PageHero'
import MaxWidth from 'components/_ui/MaxWidth/MaxWidth'
import TOC from 'components/TOC/TOC'
import SEO from "components/SEO/SEO"
import './Post.scss'

export default ({ data }) => {
    let Post = data.mdx
    let slug = Post.frontmatter.slug
    let featuredImgFluid = Post.frontmatter.featuredImage.childImageSharp.fluid

    return (
        <>
            <SEO
                title={`${Post.frontmatter.title}`}
            />
            <Layout showNavigation showFooter className={classNames("Post", `Post--${Post.frontmatter.slug}`)}>
                <div>
                    <Label className="Post__hero__label" category="primary">
                        <Link className="Post__hero__label__link" to={'/blog'}>
                            Blog
                        </Link>
                    </Label>
                    <h1 className="Post__hero__title">
                        {Post.frontmatter.title}
                    </h1>

                    {/* {Post.frontmatter.description && (
                        <h2 className="Post__hero__description">
                            {Post.frontmatter.description}
                        </h2>
                    )} */}

                    <PageHero
                        className="Post__hero__image"
                        page={slug}
                        image={featuredImgFluid}
                    />

                    <MaxWidth size="l" className="Post__content__container">
                        <div className="Post__content">
                            <div></div>
                            <div className="Word__content__body">
                                <MDXRenderer>
                                    {Post.body}
                                </MDXRenderer>
                            </div>
                            <TOC
                                className="Post__content__TOC"
                            />
                        </div>
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
      frontmatter {
        slug
        title
        description
        section
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