import React, { Component } from 'react';
import ReactGA from 'react-ga';
//import { Link } from 'react-router-dom';
import Button from "components/_ui/Button/Button";
import Label from "components/_ui/Label/Label";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Project.scss';

class Project extends Component {
    static propTypes = {
        demo: PropTypes.string,
        description: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
        ]),
        github: PropTypes.string,
        hasImageBorder: PropTypes.bool,
        images: PropTypes.array,
        inspiration: PropTypes.string,
        tech: PropTypes.array,
        title: PropTypes.string,
    };

    trackEvent = (action) => {
        ReactGA.event({
            category: 'User',
            action: action
        });
    }

    render() {
        const { demo, description, github, hasImageBorder, images, inspiration, tech, title } = this.props;
        return (
            <div className="Project__container">
                <div className="Project__info__container">
                    <h2 className="Project__title">
                        { title }
                    </h2>
                    <div className="Project__about">
                        {inspiration && (
                            <div className="Project__inspiration">
                                <h4 className="Project__inspiration__title">
                                    Inspired by:
                                </h4>
                                <a className="Project__inspiration__link"
                                    href={inspiration.link_src}
                                    rel="noopener noreferrer" target="_blank">
                                    {inspiration.title}
                                </a>
                            </div>
                        )}
                        <span>
                            {/* {inspiration.title} */}
                        </span>
                        {demo && (
                            <p>
                                <a href={demo}
                                    rel="noopener noreferrer" target="_blank"
                                    onClick={() => this.trackEvent(`Project | clicked demo button: ${title}`)}>
                                    <Button category="secondary" target="_blank">
                                        demo
                                    </Button>
                                </a>
                            </p>
                        )}
                        <div>
                            { description }
                        </div>

                        {github && (
                            <p>
                                <i className="Project__link__icon fab fa-github"></i>
                                <a className="Project__inspiration__link"
                                    onClick={() => this.trackEvent(`Project | clicked Github: ${title}`)}
                                    href={github}
                                    rel="noopener noreferrer" target="_blank" >
                                    Github
                                </a>
                            </p>
                        )}
                    </div>
                    <div className="Project__tech__section">
                        <Label className="Project__tech__title" category="primary">
                            tools
                        </Label>
                        {Object.keys(tech).map((key) =>
                            <Label className="Project__tech"
                                key={key}
                            >
                            { tech[key] }
                            </Label>
                        )}
                    </div>
                </div>
                <div className={classNames("Project__image__container", {
                    'Project__image__container--has-link': demo
                })}>
                    {Object.keys(images).map((key, bees) =>
                        <a className="Project__image__link"
                            onClick={() => this.trackEvent(`Project | clicked demo Image: ${title}`)}
                            href={demo} rel="noopener noreferrer" target="_blank" key={key}>
                            <img className={classNames("Project__image", {
                                "Project__image--hasBorder" : hasImageBorder
                            })}
                                src={require(`./images/${images[key]}.png`)}
                                alt="Project"
                            />
                            {demo && (
                                <div className="Project__image__action">
                                    <Button shape="square" size="large" className="Project__image__button"
                                            category="secondary" target="_blank">
                                        Go to demo
                                    </Button>
                                </div>
                            )}
                        </a>

                    )}
                </div>
            </div>
        );
    }
}

export default Project;