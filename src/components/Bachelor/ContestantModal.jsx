import React, { useState } from 'react'
import ContestantHead from "components/Bachelor/ContestantHead"
import { Modal } from "components/_ui/Modal/Modal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './ContestantModal.scss'

const ContestantModal = ({ contestant, name, onClose }) => {

    return (
        <Modal onClose={() => onClose()} className="ContestantModal">
            <div className="ContestantModal__header">
                <ContestantHead name={name} />
                <div className="ContestantModal__name">
                    {name}, {contestant.age}
                </div>
                <div className="ContestantModal__occupation">
                    {contestant.occupation}
                </div>
            </div>
        </Modal>
    )
}

export default ContestantModal;

