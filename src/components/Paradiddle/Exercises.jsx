import React, { useState } from 'react'
import classNames from "classnames"
import PropTypes from 'prop-types'
import Staff from 'components/Paradiddle/Staff'
import './Exercises.scss'


const Exercises = ({ variations, handleVariationChange, selectedExercise }) => {
    let exercises = ["A", "B", "C", "D"]

    return (
        <div className="Exercises">
            <div className="Exercises__staff" >
                <Staff variations={variations} selectedExercise={selectedExercise}/>
            </div>

            <div className="Exercises__variations">
                {variations.map((variation, i) => (
                    <div className={classNames(`Exercises__variation Exercises__variation--${i+1}`, {
                        "Exercises__variation--isActive" : selectedExercise == i + 1
                    })}
                        key={i} onClick={() => handleVariationChange(i + 1)}>
                        <div className="Exercises__variation__title">
                            <span className="Exercises__variation__dot"></span> Variation {exercises[i]}
                        </div>
                        {variations[i].map((step, i) => (
                            <span key={i} className="Exercises__variation__step">
                                {step}
                            </span>
                        ))}
                    </div>
                ))}
            </div>

            <div onClick={() => handleVariationChange("")}>
                Clear
            </div>
        </div>
    );
};

Exercises.propTypes = {
    variations: PropTypes.array,
};

export default Exercises;