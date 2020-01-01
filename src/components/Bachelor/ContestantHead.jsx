import React from 'react'
import classNames from 'classnames'
import './ContestantHead.scss'
let images = require.context('components/Bachelor/images', true);

const simpleNameParser = d => d.toLowerCase().replace(/[ ,.]/g, "")

const ContestantHead = ({ name, className, isSvg, x, y, showNotch }) => {
    let simpleName = simpleNameParser(name);
    let img_src = images(`./head-${simpleName}.png`)

    return (
        <>
            {!isSvg ? (
                <div className={classNames(className, "ContestantHead")}>
                    <img src={img_src} alt={`Bachelor contestant, ${name}`} />
                </div>
            ) : (
                <>
                    {showNotch && (
                        <svg x={x + 16} y={y} >
                            <path d="M4.5 0L9 4H0L4.5 0Z" fill="#CAA0F1" />
                        </svg>
                    )}
                        <image
                            x={x}
                            y={y + 5}
                            width="40"
                            height="40"
                            href={img_src}>
                        </image>
                </>

            )}
        </>

    )
}

export default ContestantHead;

