import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Contestants from 'components/Bachelor/Contestants'
import ContestantHistogram from 'components/Bachelor/ContestantHistogram'
import MaxWidth from 'components/_ui/MaxWidth/MaxWidth'
import peterCrownImg from './images/head-peter-crown.png'
import './Bachelor.scss'

import contestantsDataA from 'components/Bachelor/data/bachelor-cosmo.csv'
import contestantsDataB from 'components/Bachelor/data/bachelor-usmag.csv'

import contestantsDataAges from 'components/Bachelor/data/bachelor-cosmo-ages.csv'
const ageAccessor = d => d.age

const Bachelor = () => {

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
            {/* <ContestantHistogram
                data={contestantsDataAges}
                xAccessor={ageAccessor}
                label="Age"
            /> */}
            <MaxWidth className="Bachelor__contestants">
                <Contestants/>
            </MaxWidth>
        </>
    )
}

export default Bachelor;

