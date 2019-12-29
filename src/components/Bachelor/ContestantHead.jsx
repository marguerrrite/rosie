import React from 'react'
import './ContestantHead.scss'
let images = require.context('components/Bachelor/images', true);

const simpleNameParser = d => d.toLowerCase().replace(/[ ,.]/g, "")

const ContestantHead = ({ name }) => {
    let simpleName = simpleNameParser(name);
    let img_src = images(`./head-${simpleName}.png`)

    return (
        <div className="ContestantHead">
            <img src={img_src} />
        </div>
    )
}

export default ContestantHead;

