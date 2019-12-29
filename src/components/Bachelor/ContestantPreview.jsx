import React from 'react'
import ContestantHead from "components/Bachelor/ContestantHead"
import './ContestantPreview.scss'

const ContestantPreview = ({ name }) => {
    return (
        <div className="ContestantPreview">
            <ContestantHead name={name} />
            {name}
        </div>
    )
}

export default ContestantPreview;

