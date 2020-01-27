import React from "react"
import { graphql } from "gatsby"
import Link from "components/_ui/Link/Link"
import Layout from "components/Layout/Layout"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import SEO from "components/SEO/SEO"
import "./blog.scss"

const Blog = ({ data }) => {
    const posts = data.allMdx.edges

    return (
        <Layout className="Layout__blog Writing" showNavigation showFooter>
            <SEO title="Blog" />
            <MaxWidth className="Blog__content__container">
                <div className="Blog__content">
                    <h1 className="Blog__title">
                        Blog
                    </h1>
                    <div className="Blog__posts">
                        <>
                            {posts.map((post, i) => (
                                <BlogPost post={post} key={i} />
                            ))}
                        </>
                        <div className="Blog__tbd">
                            🤺 More in the works! 🤺
                        </div>
                    </div>
                </div>
            </MaxWidth>
        </Layout>
    )
};

export default Blog;


const BlogPost = ({ post }) => {

    let frontmatter = post.node.frontmatter

    return (
        <Link to={`blog${post.node.fields.slug}`} className="BlogPost">
            <h3 className="BlogPost__title">
                {frontmatter.title}
            </h3>
            <div className="BlogPost__categories">
                Web Development, Tutorial
            </div>
            <div className="BlogPost__description">
                {frontmatter.description}
            </div>
        </Link>
    )
};


export const BLOGPOST_QUERY = graphql`
    query {
        allMdx(filter: {
            frontmatter: {type: {ne: "internal"}},
            fileAbsolutePath: {regex: "/blog/"}},
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
                        date(formatString: "MMMM D, YYYY")
                    }
                }
            }
        }
    }
`


