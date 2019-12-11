import React from 'react'
import classNames from "classnames"
import PropTypes from 'prop-types'
import './Staff.scss'


const Staff = ({ variations, selectedExercise }) => {

    //let currentVariation = selectedExercise ? variations[selectedExercise - 1] : null
    let currentVariation = variations[selectedExercise - 1]


    return (
        <div className="Staff__container">
            {variations[0].map((beats, i) => (
                <div className="Staff__highHats__note" key={i}>
                    {highHat}
                </div>
            ))}

            {variations[0].map((beats, i) => (
                <StaffNoteCol key={i} variationNote={selectedExercise ? currentVariation[i] : ""}/>
            ))}

        </div>
    );
};

Staff.propTypes = {
    variations: PropTypes.array,
};

export default Staff;


const StaffNoteCol = ({ variationNote } ) => {
    return (
        <div className="Staff__noteCol">
            <div className={classNames("Staff__noteCol__note Staff__noteCol__note--snare", {
                "Staff__noteCol__note--isActive" : variationNote === "l"
            })}>
                {note}
            </div>
            <div className={classNames("Staff__noteCol__note Staff__noteCol__note--bass", {
                "Staff__noteCol__note--isActive": variationNote === "r"
            })}>
                {note}
            </div>
        </div>
    )
}


const highHat =
    <svg width="10" height="32" viewBox="0 0 10 32" fill="none">
        <path d="M9.63896 23.1039V0.0205078H8.70702V22.172L4.97927 25.8997L1.28736 22.172L0.31958 23.1039L4.04733 26.8316L0.31958 30.5594L1.28736 31.4555L4.97927 27.7636L8.70702 31.4555L9.63896 30.5594L5.91121 26.8316L9.63896 23.1039Z" />
    </svg>

const note =
    <svg width="10" height="33" viewBox="0 0 10 33" fill="none">
        <path d="M9.74211 26.9949C9.74211 27.7986 9.44257 28.6315 8.84348 29.4936C8.21518 30.3118 7.40422 30.9474 6.41062 31.4004C5.43163 31.8388 4.47455 32.0579 3.5394 32.0579C2.70652 32.0579 1.96132 31.8168 1.30379 31.3346C0.675482 30.8525 0.361328 30.2095 0.361328 29.4059C0.361328 28.5438 0.675482 27.7036 1.30379 26.8854C1.59603 26.5639 1.95402 26.2351 2.37776 25.8991C2.8015 25.5484 3.26908 25.205 3.78049 24.8689C4.32113 24.6351 4.81062 24.4671 5.24898 24.3648C5.70194 24.2625 6.1403 24.2114 6.56404 24.2114C7.45536 24.2114 8.2444 24.4598 8.93115 24.9566V0.62793H9.74211V26.9949Z" />
    </svg>