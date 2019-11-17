import React from "react"
import { graphql } from 'gatsby'
import classNames from 'classnames'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from "gatsby-image"
import Label from "components/_ui/Label/Label"
import Layout from "components/Layout/Layout"
import Link from "components/_ui/Link/Link"
import PageDetail from 'components/PageDetail/PageDetail'
import MaxWidth from "components/_ui/MaxWidth/MaxWidth"
import Objectives from 'components/Objectives/Objectives'
import TOC from 'components/TOC/TOC'
import './Work.scss'

export default ({ data, path }) => {
    let Work = data.mdx
    let featuredImgFluid = Work.frontmatter.featuredImage.childImageSharp.fluid
    let objectives = Work.frontmatter.objectives.childMdx
    return (
        <Layout showSocialCol={false} className={classNames("Work", `Work--${Work.frontmatter.slug}`)}>
            <div>
                <Label className="Work__hero__label" category="primary">
                    <Link className="Work__hero__label__link" to={'/#work'}>Work</Link> | {Work.frontmatter.section}
                </Label>
                <h1 className="Work__hero__title">
                    {Work.frontmatter.title}
                </h1>
                {/* <div className="Work__metas">
                    <div className="Work__date">
                        {Work.frontmatter.date}
                    </div>
                    <div className="Work__social">
                        <TwitterShareButton
                            url={`https://marguerite.io${path}`}
                            title={Work.frontmatter.title}
                            className="Work__social__share-button">
                            <span>
                                Tweet me!
                            </span>
                            <TwitterIcon
                                className="Work__social__icon"
                                size={32}
                                round />
                        </TwitterShareButton>
                    </div>
                </div> */}

                <MaxWidth size="l">
                    <Img
                        className="Work__hero__image"
                        fluid={featuredImgFluid}
                    />
                </MaxWidth>
                {/* <div className="Work__details">
                    <div className="Work__detail__item">
                        <h5>
                            Tools and Tech
                            </h5>
                        {Work.frontmatter.details[0].tools}
                    </div>
                </div> */}
                <MaxWidth size="l" className="Work__content__container">
                    <div className="Work__content">
                        <PageDetail
                            className="Work__content__detail"
                            details={Work.frontmatter.details[0]} />
                        <div className="Word__content__body">
                            <Objectives objectives={objectives.body}/>
                            <MDXRenderer>
                                {Work.body}
                            </MDXRenderer>
                        </div>
                        <TOC
                            className="Work__content__TOC"
                        />
                    </div>
                </MaxWidth>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        slug
        title
        section
        details {
            role
            status
            tools
            waitingForUserData
        }
        date(formatString: "MMMM D, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        objectives {
          childMdx {
            body
          }
        }
      }
    }
  }
`