import React, { useState } from 'react'
import * as d3 from "d3"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Contestants from 'components/Bachelor/Contestants'
import Layout from 'components/Layout/Layout'
import Link from 'components/_ui/Link/Link'
import MaxWidth from 'components/_ui/MaxWidth/MaxWidth'
import SEO from 'components/SEO/SEO'
import peterCrownImg from './images/head-peter-crown.png'
import './Bachelor.scss';

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
            <MaxWidth className="Bachelor__contestants">
                <Contestants/>
            </MaxWidth>
        </>
    )
}

export default Bachelor;

