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
                <SEO title="Bachelor Contestants 2020" />

                <Bachelor />
            </Layout>
        </>
    )
}

export default Bachelor2020;

