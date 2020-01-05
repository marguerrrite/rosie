import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import ContestantHead from "components/Bachelor/ContestantHead"
import ContestantHistogram from 'components/Bachelor/ContestantHistogram'
import ContestantMap from 'components/Bachelor/ContestantMap'
import { Modal } from "components/_ui/Modal/Modal"
import './ContestantModal.scss'

import contestantsDataAges from 'components/Bachelor/data/bachelor-cosmo-ages.csv'
const ageAccessor = d => d.age

const ContestantModal = ({ contestant, name, onClose, contestantCoordinates }) => {

    return (
        <Modal onClose={() => onClose()} className="ContestantModal">
            <div className="ContestantModal__header">
                <ContestantHead className="ContestantModal__head" name={name} />
                <div className="ContestantModal__name">
                    {name}, {contestant.age}
                </div>
                <div className="ContestantModal__occupation">
                    {contestant.occupation}
                </div>
                <div className="ContestantModal__location">
                    <FontAwesomeIcon className="" icon={faMapMarkerAlt} /> {contestant.location}
                </div>
            </div>
            {/* <div className="ContestantModal__content">
                <ContestantHistogram
                    className="ContestantModal__histogram"
                    data={contestantsDataAges}
                    xAccessor={ageAccessor}
                    label="Age"
                    contestantAge={contestant.age}
                    contestantName={name}
                />
            </div> */}
            <div className="ContestantModal__content">
                <ContestantMap
                    className="ContestantModal__map"
                    data={contestantsDataAges}
                    contestantName={name}
                    contestantCoordinates={contestantCoordinates}
                />
            </div>

        </Modal>
    )
}

export default ContestantModal;

