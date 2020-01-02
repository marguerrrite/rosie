import React, { useState } from 'react'
import * as d3 from "d3"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Layout from 'components/Layout/Layout'
import Link from 'components/_ui/Link/Link'
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
                className="Paradiddles__layout" showFooter>
                <SEO title="Paradiddles Data Visualization" image="https://www.marguerite.io/og-image-paradiddles.png" twitterImage="https://www.marguerite.io/twitter-image-paradiddles.png"/>

                <MaxWidth size="l" className="Paradiddles">
                    <Timeline
                        data={data}
                        xAccessor={dateAccessor}
                        yAccessor={bpmAccessor}
                        label="BPM"
                        className="Paradiddles__timeline"
                        selectedExercise={selectedExercise}
                    />
                    <div className="Paradiddles__content">
                        <h1>
                            7 Days of Paradiddle Variations 🥁
                        </h1>
                        <div>
                            With quarter note high hat pulse
                        </div>
                        <Exercises
                            handleVariationChange={handleVariationChange}
                            variations={variations}
                            selectedExercise={selectedExercise}
                        />
                    </div>
                    <p className="Paradiddles__description">
                        For a week in November I practiced a set of paradiddle drumming variations
                        I was assigned. Not sure which was more fun (work?)&mdash;practicing at the kit or
                        developing this chart in <Link doOpenInNewTab to={"https://codepen.io/marguerite/pen/GRgoxxv"}>vanilla JS + d3</Link> then <Link doOpenInNewTab to="https://github.com/margueriteroth/rosie/tree/master/src/components/Paradiddle">React</Link> 🤔.
                    </p>
                </MaxWidth>
            </Layout>
        </>
    )
}

export default Paradiddles;

