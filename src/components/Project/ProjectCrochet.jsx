import React, { Component } from 'react';
import ReactGA from 'react-ga';
import * as d3 from 'd3';
import Moment from 'react-moment';
import humanizeDuration from 'humanize-duration';
import Chart from "components/Chart/Chart";
import Label from "components/_ui/Label/Label";
import classNames from 'classnames';
import datacrochet from "./crochet.csv";
import './Project.scss';

const tech = [
    "d3",
    ["6.5mm crochet hook 🧶"]
]

class ProjectCrochet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoaded: false,
            hoveredCircle: null,
        }

        this.setHoveredCircle = this.setHoveredCircle.bind(this);
        this.unsetHoveredCircle = this.setHoveredCircle.bind(this);
    }

    setHoveredCircle(data) {
        this.setState({ hoveredCircle: data });
    }

    timeConverter(d) {
        let data  = d;
        const parseTime = d3.timeParse('%Y-%m-%dT%H:%M:%S');

        for (let i = 0; i < data.length; i++) {
            data[i].absolute_session = ((Date.parse(data[i].date_end_time) - Date.parse(data[i].date_start_time)) / 36e5)
            data[i].date_start_time_abs = parseInt(data[i].date_start_time_conv, 10)
            data[i].session = Math.abs(Date.parse(data[i].date_end_time) - Date.parse(data[i].date_start_time)) / 36e5
            data[i].session_num = parseInt(data[i].session_num, 10)
            data[i].date_end_time_conv = parseTime(data[i].date_end_time)
            data[i].date_start_time_conv = parseTime(data[i].date_start_time)
            data[i].bees = humanizeDuration(12000);
        }
        this.setState({data: data, isLoaded: true});
    }

    componentDidMount() {
        this.timeConverter(datacrochet);
    }

    trackEvent = (action) => {
        ReactGA.event({
            category: 'User',
            action: action
        });
    }

    render() {
        const { data, isLoaded, hoveredCircle } = this.state;
        return (
            <div className="ProjectCrochet Project__container">
                <div className="Project__info__container">
                    <h2 className="Project__title">
                        Crochet blanket
                    </h2>
                    <div className="Project__about">
                        <div className="ProjectCrochet__tooltip ProjectCrochet__tooltip--total-time">
                            <Label category="primary" className="ProjectCrochet__tooltip__label">
                                Total time
                            </Label>
                            <div className="ProjectCrochet__tooltip__info">
                                <span className="ProjectCrochet__tooltip__data ProjectCrochet__tooltip__data--total">
                                    81 hours, 2 minutes, 15 seconds
                                </span>
                            </div>
                        </div>
                        <p>
                            I crocheted a queen-sized blanket for a friend
                            and tracked my time (I started tracking time after ~24 hours).
                            Highlights included binging Netflix and hand cramps.
                        </p>
                        <p>
                            Insight: crocheting a blanket takes a lot of time.
                        </p>
                    </div>
                    <div className="Project__tech__section">
                        <Label className="Project__tech__title" category="primary">
                            tools
                        </Label>
                        {Object.keys(tech).map((key) =>
                            <Label className="Project__tech"
                                key={key}
                            >
                                {tech[key]}
                            </Label>
                        )}
                    </div>
                </div>
                <div className={classNames("Project__image__container")}>
                    <div className="ProjectCrochet__tooltips__container">
                        <div className="ProjectCrochet__tooltip">
                            <div className="ProjectCrochet__tooltip__info">
                                {hoveredCircle ? (
                                    <i className={classNames("ProjectCrochet__tooltip__icon fas fa-calendar-alt",
                                        hoveredCircle.session_num !== 1 ? 'ProjectCrochet__tooltip__icon--isHovered' : 'ProjectCrochet__tooltip__icon--isHovered--red'
                                    )}/>
                                ) : (
                                    <i className={classNames("ProjectCrochet__tooltip__icon fas fa-calendar-alt")}/>
                                )}
                                {hoveredCircle ? (
                                    <React.Fragment>
                                        {(hoveredCircle.session_num === 1) ? (
                                            <span>
                                                October 16 &#8211; 22
                                            </span>
                                        ) : (
                                            <Moment
                                                className="ProjectCrochet__tooltip__data"
                                                format="MMMM D">{hoveredCircle.date_start_time}
                                            </Moment>
                                        )}
                                    </React.Fragment>
                                ) : (
                                    <span className="ProjectCrochet__tooltip__placeholder">
                                        session date
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="ProjectCrochet__tooltip">
                            <div className="ProjectCrochet__tooltip__info">
                                {hoveredCircle ? (
                                    <i className={classNames("ProjectCrochet__tooltip__icon far fa-clock",
                                        hoveredCircle.session_num !== 1 ? 'ProjectCrochet__tooltip__icon--isHovered' : 'ProjectCrochet__tooltip__icon--isHovered--red'
                                    )} />
                                ) : (
                                        <i className={classNames("ProjectCrochet__tooltip__icon far fa-clock")} />
                                )}
                                {hoveredCircle ? (
                                    <span className="ProjectCrochet__tooltip__data">
                                        {humanizeDuration(
                                            Date.parse(hoveredCircle.date_end_time) - Date.parse(hoveredCircle.date_start_time),
                                            { units: ['h', 'm'], round: true }
                                        )}
                                    </span>
                                ) : (
                                        <div className="ProjectCrochet__tooltip__placeholder">
                                            session hours
                                    </div>
                                    )}
                            </div>
                        </div>
                    </div>
                    <div className="ProjectCrochet__legend__container">
                        <div className="ProjectCrochet__legend">
                            <div className="ProjectCrochet__legend__dot ProjectCrochet__legend__dot--red"></div>
                            <Label>
                                sessions before time tracking
                            </Label>
                        </div>
                        <div className="ProjectCrochet__legend">
                            <div className="ProjectCrochet__legend__dot"></div>
                            <Label>
                                Tracked session
                            </Label>
                        </div>
                    </div>
                    <Chart
                        hoveredCircle={hoveredCircle}
                        isLoaded={isLoaded} data={data}
                        setHoveredCircle={this.setHoveredCircle}
                        unsetHoveredCircle={this.unsetHoveredCircle}
                    />
                </div>
            </div>
        );
    }
}

export default ProjectCrochet;