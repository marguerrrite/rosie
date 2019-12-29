import React from 'react'
import ContestantHead from "components/Bachelor/ContestantHead"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './ContestantPreview.scss'

const ContestantPreview = ({ info, name }) => {
    return (
        <div className="ContestantPreview">
            <ContestantHead name={name} />
            <div className="ContestantPreview__name">
                {name}, {info.age}
            </div>
            <div className="ContestantPreview__occupation">
                {info.occupation}
            </div>
            <div className="ContestantPreview__location">
                <FontAwesomeIcon className="" icon={faMapMarkerAlt} /> {info.location}
            </div>
        </div>
    )
}

export default ContestantPreview;

