import React, { useState } from 'react'
import * as d3 from "d3"
import Timeline from 'components/Movies/Timeline'
import "./MoviesContainer.scss"

import data from 'components/Movies/movies.csv'

const parseDate = d3.timeParse("%Y-%m-%d")
const dateAccessor = d => parseDate(d.Date)
const ratingAccessor = d => d.Rating

const MoviesContainer = () => {
    return (
        <div className="MoviesContainer">
            <Timeline
                data={data}
                xAccessor={dateAccessor}
                yAccessor={ratingAccessor}
                label="TBD"
                className="MoviesContainer__timeline"
            />
        </div>
    );
};

export default MoviesContainer;