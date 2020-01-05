import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Contestants from 'components/Bachelor/Contestants'
import ContestantHistogram from 'components/Bachelor/ContestantHistogram'
import ContestantMap from 'components/Bachelor/ContestantMap'

import MaxWidth from 'components/_ui/MaxWidth/MaxWidth'
import peterCrownImg from './images/head-peter-crown.png'
import './Bachelor.scss'

import contestantsDataA from 'components/Bachelor/data/bachelor-cosmo.csv'
import contestantsDataB from 'components/Bachelor/data/bachelor-usmag.csv'

const Bachelor = () => {
    const [parsedContestants, setParsedContestants] = useState('');

    const geoapikey = '4b0753ae63c03000c5e40404e4abce5040ae5be'
    const api_url = 'https://api.geocod.io/v1.4/geocode'

    useEffect(() => {
        // You need to restrict it at some point
        // This is just dummy code and should be replaced by actual
        if (!parsedContestants) {
            getParsedContestants();
        }
    }, []);

    const getParsedContestants = async () => {
        const contestantsData = await Promise.all(
            contestantsDataA.map(async (d, i) => {
                let location = d.location
                let url = api_url
                    + '?'
                    + 'api_key=' + geoapikey
                    + '&q=' + encodeURIComponent(location)

                const res = await fetch(url)
                const json = await res.json()

                return {
                    ...d,
                    lat: json.results[0].location.lat,
                    lng: json.results[0].location.lng,
                    name: contestantsDataB[i].name,
                    image: contestantsDataB[i]["image-src"]
                }
            })
        )

        setParsedContestants(contestantsData);
    };

    return (
        <>
            <MaxWidth size="l" className="Bachelor__header">
                <h1 className="Bachelor__header__title">
                    The Bachelor
                </h1>
                <img className="Bachelor__header__peter" src={peterCrownImg} />
                <h4 className="Bachelor__header__name">
                    Peter Weber, 28
                </h4>
                <div className="Bachelor__header__description">
                    <span>
                        <FontAwesomeIcon className="" icon={faMapMarkerAlt} /> Westlake Village, CA
                    </span>
                    <span>
                        ✈️ Airline Pilot
                    </span>
                    <span>
                        🌹Hannah’s Season
                    </span>
                </div>
            </MaxWidth>
            {/* <ContestantMap
                data={contestantsDataAges}
            /> */}

            {/* <ContestantHistogram
                data={contestantsDataAges}
                xAccessor={ageAccessor}
                label="Age"
            /> */}
            <MaxWidth className="Bachelor__contestants">
                <Contestants parsedContestants={parsedContestants}/>
            </MaxWidth>
        </>
    )
}

export default Bachelor;

