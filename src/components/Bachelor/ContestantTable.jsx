import React, { useState, useEffect } from 'react'
import _ from "lodash"
// import * as d3 from "d3"
//import ContestantModal from "components/Bachelor/ContestantModal"
import contestantsData from 'components/Bachelor/data/parsedContestants.csv'
import './ContestantTable.scss'

const ContestantTable = () => {
    const [sortedContestants, setSortedContestants] = useState(contestantsData)
    const [sortedCategory, setSortedCategory] = useState('name')

    function sortByName() {
        console.log('sort by name')
    }

    function sortByAge() {
        let contestants = sortedContestants;

        contestants.sort(
            function (a, b) {
                return a.age - b.age
            }
        );
        setSortedCategory('age')
        setSortedContestants(contestants)
    }

    return (
        <div className="ContestantTable">
            <div className="ContestantTable__header">
                <span></span>
                <div className="ContestantTable__header__item"
                    onClick={() => sortByName()}>
                    name
                </div>
                <div className="ContestantTable__header__item"
                    onClick={() => sortByAge()}>
                    age
                </div>
                <div className="ContestantTable__header__item">
                    location
                </div>
                <div className="ContestantTable__header__item">
                    occupation
                </div>
            </div>
            {sortedContestants.map((contestant, i) => (
                <ContestantTableRow
                    key={i}
                    contestant={contestant}
                />
            ))}
        </div>
    )
}

export default ContestantTable;



const ContestantTableRow = ({ contestant }) => {
    return (
        <div className="ContestantTableRow">
            <div className="ContestantTableRow__head">
                head
            </div>
            <div className="ContestantTableRow__name">
                {contestant.name}
            </div>
            <div className="ContestantTableRow__age">
                {contestant.age}
            </div>
            <div className="ContestantTableRow__location">
                {contestant.location}
            </div>
            <div className="ContestantTableRow__occupation">
                {contestant.occupation}
            </div>
        </div>
    )
}
