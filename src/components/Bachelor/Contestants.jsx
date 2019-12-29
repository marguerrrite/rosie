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
            {contestantsDataA.map((info, i) => (
                <ContestantPreview info={info} key={i} name={contestantNames[i]}/>
            ))}
        </div>
    )
}

export default Contestants;