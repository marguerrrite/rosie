import React from 'react'
import classNames from "classnames"
import PropTypes from 'prop-types'
import Staff from 'components/Paradiddle/Staff'
import './Exercises.scss'

const Exercises = ({ variations, handleVariationChange, selectedExercise }) => {
    let exercises = ["A", "B", "C", "D"]
    let count = ["1", "+", "2", "+", "3", "+", "4", "+"]

    return (
        <div className="Exercises">
            <div className="Exercises__staff" >
                <Staff variations={variations} selectedExercise={selectedExercise}/>
                <div className="Exercises__count">
                    {count.map((step, i) => (
                        <span className="Exercises__count__item" key={i}>
                            {step}
                        </span>
                    ))}
                </div>
            </div>

            <div className="Exercises__variations">
                {variations.map((variation, i) => (
                    <div className={classNames(`Exercises__variation Exercises__variation--${i+1}`, {
                        "Exercises__variation--isActive" : selectedExercise === i + 1
                    })}
                        key={i} onClick={() => handleVariationChange((selectedExercise === i + 1) ? "" : i + 1)}>
                        <div className="Exercises__variation__title">
                            <div className="Exercises__variation__dot"></div> Variation {exercises[i]}
                        </div>
                        {variations[i].map((step, i) => (
                            <span key={i} className="Exercises__variation__step">
                                {step}
                            </span>
                        ))}
                    </div>
                ))}
            </div>

            {/* <Button
                className="Exercises__reset"
                onClick={() => handleVariationChange("")}
                category="secondary">
                Reset
            </Button> */}
        </div>
    );
};

Exercises.propTypes = {
    variations: PropTypes.array,
};

export default Exercises;