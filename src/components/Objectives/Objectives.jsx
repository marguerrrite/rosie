import React from "react"
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import './Objectives.scss';


const Objectives = ({children, className, objectives}) => {

    return (
        <div
            className="Objectives__container">
            <div className="Objectives">
                <MDXRenderer>
                    {objectives}
                </MDXRenderer>
            </div>
        </div>
    );
};

Objectives.propTypes = {
    objectives: PropTypes.string,
};

export default Objectives;