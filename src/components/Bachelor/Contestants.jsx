import React, { useState } from 'react'
import { Modal } from "components/_ui/Modal/Modal"

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
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <div className="Contestants__grid">
            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <p>
                        woo!
                    </p>
                </Modal>
            )}
            {contestantsDataA.map((info, i) => (
                <ContestantPreview
                    info={info}
                    key={i}
                    name={contestantNames[i]}
                    onClick={() => setIsModalOpen(true)}
                />
            ))}
        </div>
    )
}

export default Contestants;