import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Contestants from 'components/Bachelor/Contestants'
import Link from "components/_ui/Link/Link"
import MaxWidth from 'components/_ui/MaxWidth/MaxWidth'
import Label from "components/_ui/Label/Label";
import './Bachelor.scss'

import contestantsDataA from 'components/Bachelor/data/bachelor-cosmo.csv'
import contestantsDataB from 'components/Bachelor/data/bachelor-usmag.csv'
import contestantsDataC from 'components/Bachelor/data/bachelor-abc.csv'

import contestants from 'components/Bachelor/data/parsedContestants.csv'

const Bachelor = () => {
    const [parsedContestants, setParsedContestants] = useState('')

    useEffect(() => {
        // You need to restrict it at some point
        // This is just dummy code and should be replaced by actual
        if (!parsedContestants) {
            setParsedContestants(contestants);
        }
    }, []);


    return (
        <StaticQuery
            query={graphql`
                query BACH {
                    hero: file(absolutePath: {regex: "/background-peter-abc.jpg/"}) {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            `}
            render={data => (
                <MaxWidth size="xl" className="Bachelor">
                    <Img fluid={data.hero.childImageSharp.fluid} className="" />
                </MaxWidth>
            )}
        />
    )
}

export default Bachelor;

// const getParsedContestants = async () => {
    //     const contestantsData = await Promise.all(
    //         contestantsDataA.map(async (d, i) => {
    //             let location = d.location
    //             let url = api_url
    //                 + '?'
    //                 + 'api_key=' + geoapikey
    //                 + '&q=' + encodeURIComponent(location)

    //             const res = await fetch(url)
    //             const json = await res.json()

    //             let name = contestantsDataB[i].name

    //             //Canada!
    //             let lat = name !== "Mykenna" ? json.results[0].location.lat : 48.993867
    //             let lng = name !== "Mykenna" ? json.results[0].location.lng : -122.672326

    //             return {
    //                 ...d,
    //                 lat,
    //                 lng,
    //                 name,
    //                 image: contestantsDataB[i]["image-src"]
    //             }
    //         })
    //     )

    //     setParsedContestants(contestantsData);
    // };