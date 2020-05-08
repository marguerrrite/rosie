import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, title, image, twitterImage, canonical, pathname }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                        image
                        twitterImage
                        keywords
                    }
                }
            }
        `
    )

    const url = `${site.siteMetadata.siteUrl}${
        grabWindowPathname()
    }`;

    const metaTitle = title || site.siteMetadata.title;
    const metaDescription = description || site.siteMetadata.description;
    const metaKeywords = site.siteMetadata.keywords;
    const metaUrl = canonical || url;

    const metaImage = image || site.siteMetadata.image;
    const metaTwitterImage = twitterImage || site.siteMetadata.twitterImage;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={metaTitle}
            titleTemplate={title ? `%s | ${site.siteMetadata.title}`: null}
            meta={[
                {
                    property: `og:url`,
                    content: metaUrl,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:title`,
                    content: metaTitle,
                },
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:image`,
                    content: metaImage,
                },
                {
                    property: `og:image:alt`,
                    content: metaDescription,
                },
                {
                    property: `og:image:width`,
                    content: "1200",
                },
                {
                    property: `og:image:height`,
                    content: "630",
                },
                {
                    name: `twitter:card`,
                    content: `summary_large_image`,
                },
                {
                    name: `twitter:image`,
                    content: metaTwitterImage,
                },
                {
                    name: `twitter:image:alt`,
                    content: metaDescription,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: metaTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `keywords`,
                    content: metaKeywords,
                },
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
    image: null,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    image: PropTypes.string,
}

export default SEO;

const grabWindowPathname = () => {
    const windowGlobal = typeof window !== 'undefined' && window;
    if (!windowGlobal) return null;
    return windowGlobal.location.pathname;
};