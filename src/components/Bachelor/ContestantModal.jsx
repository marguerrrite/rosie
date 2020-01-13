import React, { useState } from 'react'
import classNames from 'classnames'
import _ from "lodash"
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

    let weeklyRoseStatus = [
        contestant.week1rose,
        contestant.week2rose,
        contestant.week3rose,
        contestant.week4rose,
        contestant.week5rose,
        contestant.week6rose,
        contestant.week7rose,
        contestant.week8rose,
        contestant.week9rose,
        contestant.week10rose,
    ]

    console.log(weeklyRoseStatus)

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

            <div className="ContestantModal__bio__container">
                <div className="ContestantModal__bio">
                    <h5 className="ContestantModal__section-title">
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
                    <h5 className="ContestantModal__section-title">
                        Full bio
                    </h5>
                    <div className="ContestantModal__bio__full">
                        {contestant.bio}
                    </div>
                </div>
            </div>

            <div className="ContestantStatus__container">
                <h5 className="ContestantModal__section-title">
                    Status
                </h5>
                <ContestantStatus status={weeklyRoseStatus} />
            </div>

            <div className="ContestantModal__map__container">
                <h5 className="ContestantModal__section-title ContestantModal__map__title">
                    <FontAwesomeIcon className="ContestantModal__map__icon" icon={faMapMarkerAlt} /> {contestant.location}
                </h5>
                <ContestantMap
                    className="ContestantModal__map"
                    data={contestantsDataAges}
                    contestantName={name}
                    contestantCoordinates={contestantCoordinates}
                />
            </div>

            <div className="ContestantModal__histogram__container">
                <h5 className="ContestantModal__section-title ContestantModal__histogram__title" >
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
        </Modal>
    )
}

export default ContestantModal;

const ContestantStatus = ({ status }) => {
    return (
        <div className="ContestantStatus">
            {status.map((week, i) => (
                <div
                    className={classNames("ContestantStatus__week", {
                        "ContestantStatus__week--futureDate" : week === undefined
                    })}
                    key={i}
                >
                    <div className="ContestantStatus__week__status">
                        {week && (
                            <span>
                                🌹
                            </span>
                        )}

                        {(week === false) && (
                            <span>
                                ❌
                            </span>
                        )}
                    </div>
                    <div className="ContestantStatus__week__label">
                        week {i + 1}
                    </div>
                </div>
            ))}
        </div>
    )
}