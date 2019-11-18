import React, { Component } from 'react';
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import _ from "lodash";
import './DVSMap.scss';

class DVSMap extends Component {
    constructor() {
        super()
        this.state = {
            worldData: [],
            data: [],
        }
        this.user = React.createRef();
    }

    projection() {
        return geoMercator().scale(100).translate([1000 / 2, 550 / 2])
    }

    setSkill = (data) => {
        data.map((elem) => {
            const obj = [
                {
                    name: "data",
                    value: elem.data,
                },
                {
                    name: "visualization",
                    value: elem.visualization,
                },
                {
                    name: "society",
                    value: elem.society,
                }
            ];
            const skill = _.maxBy(obj, 'value');
            return elem.skill = skill.name;
        });
        return data;
    }

    setUser() {
        const top = this.user.getBoundingClientRect().y;
        const left = this.user.getBoundingClientRect().x;
        this.props.setUserOffsets(top, left);
    }

    componentDidMount() {
        fetch("https://unpkg.com/world-atlas@1.1.4/world/110m.json")
            .then(response => {
                if (response.status !== 200) {
                    console.log(`There was a problem: ${response.status}`)
                    return
                }
                response.json().then(worldData => {
                    this.setState({
                        worldData: feature(worldData, worldData.objects.countries).features,
                        data: this.setSkill(this.props.dsvData)
                    })

                    this.props.setLoading();
                    this.setUser();
                })
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if ((prevProps.containerWidth !== null) && (prevProps.containerWidth !== this.props.containerWidth)) {
            this.setUser();
        }
    }

    determineStrengthHex(skill) {
        if (skill === "data") {
            return "#29B6A8";
        } else if (skill === "visualization") {
            return "#F4AE05";
        } else {
            return "#9769F8";
        }
    }

    render() {
        const { containerWidth, showMap, showData, showViz, showSociety, isLoaded } = this.props;
        return (
            <div className="DVSMap">
                <React.Fragment>
                    {/* <svg width="1050" height="600" viewBox="0 0 900 400"> */}
                    <svg width={containerWidth} viewBox="0 0 900 400">
                        <g className="countries">
                            {
                                this.state.worldData.map((d, i) => (
                                    <path
                                        key={`path-${i}`}
                                        d={geoPath().projection(this.projection())(d)}
                                        className="country"
                                        fill='#F7F5F9'

                                        stroke="#FFFFFF"
                                        strokeWidth={1}
                                        fillOpacity={showMap ? 1 : 0}
                                        strokeOpacity={showMap ? 1 : 0}
                                    />
                                ))
                            }
                        </g>
                        <g className="markers">
                            {
                                this.state.data.map((member, i) => (
                                    ((member.skill === "data") ? (
                                        <circle
                                            key={`marker-${i}`}
                                            cx={this.projection()([member.long, member.lat])[0]}
                                            cy={this.projection()([member.long, member.lat])[1]}
                                            r={2.4}
                                            fill={this.determineStrengthHex(member.skill)}
                                            className="DVSMap__marker"
                                            onMouseEnter={datum => this.onMouseEnter(member, i)}
                                            onMouseLeave={datum => this.onMouseLeave(null)}
                                            fillOpacity={showData ? 1 : 0}
                                        />
                                    ) : (member.skill === "visualization") ? (
                                            <circle
                                                key={`marker-${i}`}
                                                cx={this.projection()([member.long, member.lat])[0]}
                                                cy={this.projection()([member.long, member.lat])[1]}
                                                r={2.4}
                                                fill={this.determineStrengthHex(member.skill)}
                                                className="DVSMap__marker"
                                                onMouseEnter={datum => this.onMouseEnter(member, i)}
                                                onMouseLeave={datum => this.onMouseLeave(null)}
                                                fillOpacity={showViz ? 1 : 0}
                                            />
                                    ) : (member.skill === "society") && (
                                            <circle
                                                key={`marker-${i}`}
                                                cx={this.projection()([member.long, member.lat])[0]}
                                                cy={this.projection()([member.long, member.lat])[1]}
                                                r={2.4}
                                                fill={this.determineStrengthHex(member.skill)}
                                                className="DVSMap__marker"
                                                onMouseEnter={datum => this.onMouseEnter(member, i)}
                                                onMouseLeave={datum => this.onMouseLeave(null)}
                                                fillOpacity={showSociety ? 1 : 0}
                                            />
                                    ))
                                ))

                            }
                        </g>
                        {isLoaded && (
                            <g>
                                <circle
                                    ref={(el) => { this.user = el }}
                                    cx={this.projection()([this.props.userCoords.longitude, this.props.userCoords.latitude])[0]}
                                    cy={this.projection()([this.props.userCoords.longitude, this.props.userCoords.latitude])[1]}
                                    r={3}
                                    fill="#FFCF5C"
                                    fillOpacity={0}
                                    className="DVSMap__marker DVSMap__marker--user"
                                />
                            </g>
                        )}
                    </svg>
                </React.Fragment>
            </div>
        );
    }
}

export default DVSMap;
