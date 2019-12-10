import React, { useState } from 'react'
import classNames from "classnames"
import PropTypes from 'prop-types'
import Staff from 'components/Paradiddle/Staff'
import './Exercises.scss'


const Exercises = ({ variations, handleVariationChange, selectedExercise }) => {
    return (
        <div>
            <div className="Exercises__staff" >
                <Staff variations={variations} selectedExercise={selectedExercise}/>
            </div>

            <div className="Exercises__variations">
                {variations.map((variation, i) => (
                    <div className={classNames(`Exercises__variation Exercises__variation--${i+1}`, {
                        "Exercsises__variation--isActive" : selectedExercise == (i+1)
                    })}
                        key={i} onClick={() => handleVariationChange(i + 1)}>
                        Variation {i+1}
                    </div>
                ))}
            </div>
        </div>
    );
};

Exercises.propTypes = {
    variations: PropTypes.array,
};

export default Exercises;
