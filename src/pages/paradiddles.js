import React, { useState } from 'react'
import * as d3 from "d3"
import Layout from 'components/Layout/Layout'
import MaxWidth from 'components/_ui/MaxWidth/MaxWidth'
import Exercises from 'components/Paradiddle/Exercises'
import Timeline from 'components/Paradiddle/Timeline'
import SEO from 'components/SEO/SEO'
import "./paradiddles.scss"

import dataA from 'components/Paradiddle/paradiddleA.json'
import dataB from 'components/Paradiddle/paradiddleB.json'
import dataC from 'components/Paradiddle/paradiddleC.json'
import dataD from 'components/Paradiddle/paradiddleD.json'

const parseDate = d3.timeParse("%Y-%m-%d")
const dateAccessor = d => parseDate(d.date)
const bpmAccessor = d => d.bpm

const variationA = ["r", "l", "r", "r", "l", "r", "l", "l"]
const variationB = ["r", "l", "l", "r", "l", "r", "r", "l"]
const variationC = ["r", "r", "l", "r", "l", "l", "r", "l"]
const variationD = ["r", "l", "r", "l", "l", "r", "l", "r"]

const Paradiddles = () => {
    let data = [dataA, dataB, dataC, dataD]
    let variations = [variationA, variationB, variationC, variationD]
    const [selectedExercise, setSelectedExercise] = useState(null)

    function handleVariationChange(variation) {
        setSelectedExercise(variation)
    }

    return (
        <>
            <Layout
                className="Paradiddles__layout"
                showSocialCol={false}
                showNavigation={false}
                showFooter={false}>
                <SEO title="Paradiddles Data Visualization" />

                <MaxWidth size="l" className="Paradiddles">
                    <Timeline
                        data={data}
                        xAccessor={dateAccessor}
                        yAccessor={bpmAccessor}
                        label="BPM"
                        className="Paradiddles__timeline"
                    />
                    <div className="Paradiddles__content">
                        <h2>
                            Paradiddle Variations
                        </h2>
                        <h3>
                            With quarter note high hat pulse
                        </h3>
                        <Exercises
                            handleVariationChange={handleVariationChange}
                            variations={variations}
                            selectedExercise={selectedExercise}
                        />
                    </div>
                </MaxWidth>

            </Layout>
        </>
    )
}

export default Paradiddles;

