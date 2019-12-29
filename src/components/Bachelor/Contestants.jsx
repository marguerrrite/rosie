import React, { useEffect } from 'react'
import * as d3 from "d3"
import _ from "lodash"
import ContestantPreview from "components/Bachelor/ContestantPreview"
import './Contestants.scss'

import contestantsDataA from 'components/Bachelor/data/bachelor-cosmo.csv'
import contestantsDataB from 'components/Bachelor/data/bachelor-usmag.csv'

const ageAccessor = d => d.age
const yAccessor = d => d.length

let contestantNames = _.map(contestantsDataB, _.property('name'));

const Contestants = () => {
    return (
        <div className="Contestants__grid">
            {contestantNames.map((name, i) => (
                <ContestantPreview name={name} key={i}/>
            ))}
        </div>
    )
}

export default Contestants;