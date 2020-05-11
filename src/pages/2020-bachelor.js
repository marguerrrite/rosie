import React, { useState } from 'react'
import Bachelor from 'components/Bachelor/Bachelor'
import Layout from 'components/Layout/Layout'
import SEO from 'components/SEO/SEO'

const Bachelor2020 = () => {

    return (
        <>
            <Layout
                className="Bachelor__layout"
                showSocialCol={false}
                showNavigation={false}
                showFooter={false}>
                <SEO
                    title="Bachelor Contestants 2020"
                    description="Reference guide to women on Peter's season!"
                    image="https://marguerite.io/og-image-bachelor2020.png"
                    twitterImage="https://marguerite.io/twitter-image-bachelor2020.png"
                />

                <Bachelor />
            </Layout>
        </>
    )
}

export default Bachelor2020;

