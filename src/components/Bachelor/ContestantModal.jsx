import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import ContestantHead from "components/Bachelor/ContestantHead"
import ContestantHistogram from 'components/Bachelor/ContestantHistogram'
import ContestantMap from 'components/Bachelor/ContestantMap'
import Button from "components/_ui/Button/Button"
import { Modal } from "components/_ui/Modal/Modal"
import './ContestantModal.scss'

import contestantsDataAges from 'components/Bachelor/data/bachelor-cosmo-ages.csv'
const ageAccessor = d => d.age

const ContestantModal = ({ contestant, name, onClose, contestantCoordinates }) => {
    const [openBio, setOpenBio] = useState("bio");

    const onToggleBio = () => {
        setOpenBio(openBio == "bio" ? "notes" : "bio");
    }

    let contestantNotes = contestant.notes.split("- ")
    contestantNotes.shift()

    return (
        <Modal onClose={() => onClose()} className="ContestantModal">
            <div className="ContestantModal__header">
                <ContestantHead className="ContestantModal__head" name={name} />
                <div className="ContestantModal__header__content">
                    <div className="ContestantModal__name">
                        {name}, {contestant.age}
                    </div>
                    <div className="ContestantModal__occupation">
                        {contestant.occupation}
                    </div>
                    <div className="ContestantModal__location">
                        <FontAwesomeIcon className="ContestantModal__location__icon" icon={faMapMarkerAlt} /> {contestant.location}
                    </div>
                </div>
            </div>
            {/* <Button
                onClick={onToggleBio}
            >
                Toggle
            </Button> */}
            <div className="ContestantModal__bio">
                <h5>
                    Notes
                </h5>
                <div className="ContestantModal__bio__notes">
                    <ul>
                        {contestantNotes.map((note, i) => (
                            <li key={i}>
                                {note}
                            </li>
                        ))}
                    </ul>
                </div>
                <h5>
                    Full bio
                </h5>
                <div className="ContestantModal__bio__full">
                    {contestant.bio}
                </div>
            </div>

            <div className="ContestantModal__map__container">
                <h5>
                    <FontAwesomeIcon className="ContestantModal__location__icon" icon={faMapMarkerAlt} /> {contestant.location}
                </h5>
                <ContestantMap
                    className="ContestantModal__map"
                    data={contestantsDataAges}
                    contestantName={name}
                    contestantCoordinates={contestantCoordinates}
                />
            </div>

            <div className="ContestantModal__histogram__container">
                <h5>
                    Contestant Age Distribution
                </h5>
                <ContestantHistogram
                    className="ContestantModal__histogram"
                    data={contestantsDataAges}
                    xAccessor={ageAccessor}
                    label="Age"
                    contestantAge={contestant.age}
                    contestantName={name}
                />
            </div>


            {/* <div className="ContestantModal__content">

                {openBio == "bio" ? (
                    <div className="ContestantModal__content__bio">
                        {contestant.bio}
                    </div>
                ) : (
                    <div className="ContestantModal__content__notes">
                        <ul>
                            {bulletNotes.map((note, i) => (
                                <li key={i}>
                                    {note}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <ContestantMap
                    className="ContestantModal__map"
                    data={contestantsDataAges}
                    contestantName={name}
                    contestantCoordinates={contestantCoordinates}
                />
                <ContestantHistogram
                    className="ContestantModal__histogram"
                    data={contestantsDataAges}
                    xAccessor={ageAccessor}
                    label="Age"
                    contestantAge={contestant.age}
                    contestantName={name}
                />
            </div> */}
        </Modal>
    )
}

export default ContestantModal;

const ContestantNotes = ({ notes }) => {
    return (
        <div className="ContestantNotes">

        </div>
    )
}