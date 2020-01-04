import React from "react"
import { graphql } from 'gatsby'
import classNames from 'classnames'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Label from 'components/_ui/Label/Label'
import Layout from "components/Layout/Layout"
import Link from 'components/_ui/Link/Link'
import PageDetail from 'components/PageDetail/PageDetail'
import PageHero from 'components/PageHero/PageHero'
import MaxWidth from 'components/_ui/MaxWidth/MaxWidth'
import TOC from 'components/TOC/TOC'
import SEO from "components/SEO/SEO"
import './Writing.scss'

export default ({ data }) => {
    let Writing = data.mdx
    let slug = Writing.frontmatter.slug
    let featuredImgFluid = Writing.frontmatter.featuredImage.childImageSharp.fluid

    return (
        <>
            <SEO
                title={`${Writing.frontmatter.title}`}
            />
            <Layout showNavigation showFooter className={classNames("Writing", `Writing--${Writing.frontmatter.slug}`)}>
                <div>
                    <Label className="Writing__hero__label" category="primary">
                        <Link className="Writing__hero__label__link" to={'/writing'}>
                            Writing
                        </Link>
                    </Label>
                    <h1 className="Writing__hero__title">
                        {Writing.frontmatter.title}
                    </h1>

                    {/* {Writing.frontmatter.description && (
                        <h2 className="Writing__hero__description">
                            {Writing.frontmatter.description}
                        </h2>
                    )} */}

                    <PageHero
                        className="Writing__hero__image"
                        page={slug}
                        image={featuredImgFluid}
                    />

                    <MaxWidth size="l" className="Writing__content__container">
                        <div className="Writing__content">
                            <div></div>
                            <div className="Word__content__body">
                                <MDXRenderer>
                                    {Writing.body}
                                </MDXRenderer>
                            </div>
                            <TOC
                                className="Writing__content__TOC"
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