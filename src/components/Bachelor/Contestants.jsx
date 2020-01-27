import React, { useState } from 'react'
// import * as d3 from "d3"
import _ from "lodash"
import ContestantPreview from "components/Bachelor/ContestantPreview"
import ContestantModal from "components/Bachelor/ContestantModal"
import './Contestants.scss'

import contestantsDataA from 'components/Bachelor/data/bachelor-cosmo.csv'
import contestantsDataB from 'components/Bachelor/data/bachelor-usmag.csv'

import peterCrownImg from './images/head-peter-crown.png'

// const ageAccessor = d => d.age
// const yAccessor = d => d.length

let contestantNames = _.map(contestantsDataB, _.property('name'));

const Contestants = ({ parsedContestants }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedContestant, setSelectedContestant] = useState(null)
    const [selectedContestantIndex, setSelectedContestantIndex] = useState(null)

    let contestantName = selectedContestant && selectedContestant.name
    let contestantLat = selectedContestant && _.find(parsedContestants, ['name', selectedContestant.name]).lat
    let contestantLng = selectedContestant && _.find(parsedContestants, ['name', selectedContestant.name]).lng

    let weeklyRoseStatus = null;
    if (selectedContestant) {
        weeklyRoseStatus = [
            _.find(parsedContestants, ['name', selectedContestant.name]).week1rose,
            _.find(parsedContestants, ['name', selectedContestant.name]).week2rose,
            _.find(parsedContestants, ['name', selectedContestant.name]).week3rose,
            _.find(parsedContestants, ['name', selectedContestant.name]).week4rose,
            _.find(parsedContestants, ['name', selectedContestant.name]).week5rose,
            _.find(parsedContestants, ['name', selectedContestant.name]).week6rose,
            _.find(parsedContestants, ['name', selectedContestant.name]).week7rose,
            _.find(parsedContestants, ['name', selectedContestant.name]).week8rose,
            _.find(parsedContestants, ['name', selectedContestant.name]).week9rose,
            _.find(parsedContestants, ['name', selectedContestant.name]).week10rose,
        ]
    }

    let weeklyHighlight = false;
    if (selectedContestant) {
        weeklyHighlight = [
            _.find(parsedContestants, ['name', selectedContestant.name]).week3highlight
        ]
    }

    function handleContestantSelection(contestant, i) {
        setSelectedContestant(parsedContestants[i])
        setSelectedContestantIndex(i)
        setIsModalOpen(true)
    }

    function clearContestantSelection() {
        setSelectedContestant(null)
        setSelectedContestantIndex(null)
        setIsModalOpen(false)
    }

    return (
        <div className="Contestants">
            {parsedContestants ? (
                <div className="Contestants__grid">
                    {isModalOpen && (
                        <ContestantModal
                            onClose={clearContestantSelection}
                            contestant={selectedContestant}
                            name={contestantName}
                            contestantIndex={selectedContestantIndex}
                            contestantCoordinates={[contestantLng, contestantLat]}
                            weeklyRoseStatus={weeklyRoseStatus}
                            weeklyHighlight={weeklyHighlight}
                        />
                    )}
                    {contestantsDataA.map((info, i) => (
                        <ContestantPreview
                            info={info}
                            key={i}
                            name={contestantNames[i]}
                            onClick={() => handleContestantSelection(info, i)}
                        />
                    ))}
                </div>
            ) : (
                <div className="Contestants__loader__container">
                    <img src={peterCrownImg} className="Contestants__loader" />
                    Loading Contestants
                </div>
            )}
        </div>
    )
}

export default Contestants;