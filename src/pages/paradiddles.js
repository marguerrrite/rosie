import React, { useState } from 'react'
import * as d3 from "d3"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Layout from 'components/Layout/Layout'
import MaxWidth from 'components/_ui/MaxWidth/MaxWidth'
import SEO from 'components/SEO/SEO'
import ParadiddleContainer from 'components/Paradiddle/ParadiddleContainer'
import "./paradiddles.scss"

const Paradiddles = () => {

    return (
        <>
            <Layout
                className="Paradiddles__layout" showFooter>
                <SEO title="Paradiddles Data Visualization" image="https://marguerite.io/og-image-paradiddles.png" twitterImage="https://marguerite.io/twitter-image-paradiddles.png"/>

                <MaxWidth size="l" className="Paradiddles">
                    <ParadiddleContainer/>
                </MaxWidth>
            </Layout>
        </>
    )
}

export default Paradiddles;

