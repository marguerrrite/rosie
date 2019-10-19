import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from "components/_ui/Link/Link";
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
                                <h4 clas3sName="Project__inspiration__title">
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
                                <Link
                                    to={demo}
                                    isButton
                                >
                                    Demo
                                </Link>
                            </p>
                        )}
                        <div>
                            { description }
                        </div>

                        {github && (
                            <p>
                                <FontAwesomeIcon className="Project__link__icon" icon={faGithub} />
                                <Link to={github} className="Project__inspiration__link">
                                    Github
                                 </Link>
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

                    {images.map((image, i) => (
                        <Link
                            key={i}
                            className="Project__image__link"
                            to={demo}
                        >
                            <img className={classNames("Project__image", {
                                "Project__image--hasBorder": hasImageBorder
                            })}
                                src={require(`./images/${image}.png`)}
                                alt="Project"
                            />
                            {demo && (
                                <div className="Project__image__action">
                                    <Link
                                        className="Project__image__button"
                                        to={demo}
                                        isButton
                                        buttonProps={{ category: "secondary" }}
                                    >
                                        Go to demo
                                    </Link>
                                </div>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default Project;