import React from "react"
import { graphql } from "gatsby"
import Link from "components/_ui/Link/Link"
import Layout from "components/Layout/Layout"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import SEO from "components/SEO/SEO"
import "./writing.scss"

const Writing = ({ data }) => {
    const posts = data.allMdx.edges

    return (
        <Layout className="Layout__writing Writing" showNavigation showFooter>
            <SEO title="Writing" />
            <MaxWidth className="Writing__content">
                <h1 className="Writing__title">
                    Writing
                </h1>
                <div className="Writing__posts">
                    {posts.map((post, i) => (
                        <WritingPost post={post} key={i} />
                    ))}
                </div>
            </MaxWidth>
        </Layout>
    )
};

export default Writing;


const WritingPost = ({ post }) => {

    let frontmatter = post.node.frontmatter

    return (
        <Link to={`writing${post.node.fields.slug}`} className="WritingPost">
            <h3 className="WritingPost__title">
                {frontmatter.title}
            </h3>
            <div className="WritingPost__categories">
                Data Viz, Project
            </div>
            <div className="WritingPost__description">
                {frontmatter.description}
            </div>
        </Link>
    )
};


export const WRITING_QUERY = graphql`
    query {
        allMdx(filter: {
            frontmatter: {type: {ne: "internal"}},
            fileAbsolutePath: {regex: "/writing/"}},
            sort: { fields: [frontmatter___date],
            order: DESC })
        {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        isFeatured
                        description
                        date(formatString: "MMMM D, YYYY")
                        categories {
                            category
                        }
                    }
                }
            }
        }
    }
`


