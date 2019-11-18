import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Button from "components/_ui/Button/Button";
import Link from "components/_ui/Link/Link";
import Label from "components/_ui/Label/Label";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import videoCurrents from 'content/work/2019-11-25-currents/currents-info.mp4';
import './Project.scss';

const Project = ({ demo, description, github, hasImageBorder, images, imgType, inspiration, readMore, tech, title }) => {
    return (
        <StaticQuery
            query={graphql`
            query PROJECT_QUERY {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
            render={data => (
                <div className="Project__container">
                    <div className="Project__info__container">
                        <h2 className="Project__title">
                            {title}
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
                                        buttonProps={{ color: "white-blue-stroke" }}
                                    >
                                        Demo
                                </Link>
                                </p>
                            )}
                            <div>
                                {description}
                            </div>

                            {readMore && (
                                <p>
                                    <Link
                                        to={readMore}
                                        isButton
                                        buttonProps={{ size: "l" }}
                                    >
                                        Read More
                                </Link>
                                </p>
                            )}

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
                                    {tech[key]}
                                </Label>
                            )}
                        </div>
                    </div>
                    <div className={classNames("Project__image__container", {
                        'Project__image__container--has-link': demo || readMore
                    })}>
                        {images.map((image, i) => (
                            <Link
                                key={i}
                                className="Project__image__link"
                                to={demo || readMore}
                            >
                                {imgType !== 'mp4' ? (
                                    <img className={classNames("Project__image", {
                                        "Project__image--hasBorder": hasImageBorder
                                    })}
                                        src={require(`./images/${image}.png`)}
                                        alt="Project"
                                    />
                                ) : (
                                        <div className={classNames("Project__image Project__image--currents", {
                                            "Project__image--hasBorder": hasImageBorder
                                        })}>
                                            <video
                                                autoPlay loop muted playsInline
                                                poster="./currents-info-map.png"
                                            >
                                                <source src={videoCurrents} type="video/mp4" />
                                            </video>
                                    </div>

                                )}
                                {demo && (
                                    <div className="Project__image__action">
                                        <Button
                                            className="Project__image__button"
                                            category="secondary"
                                        >
                                            Go to demo
                                        </Button>
                                    </div>
                                )}
                                {readMore && (
                                    <div className="Project__image__action">
                                        <Button
                                            className="Project__image__button"
                                            category="secondary"
                                        >
                                            Read More
                                        </Button>
                                    </div>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        />
    );
}

Project.propTypes = {
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



// class Project extends Component {
//     static propTypes = {
//         demo: PropTypes.string,
//         description: PropTypes.oneOfType([
//             PropTypes.string,
//             PropTypes.object,
//         ]),
//         github: PropTypes.string,
//         hasImageBorder: PropTypes.bool,
//         images: PropTypes.array,
//         inspiration: PropTypes.string,
//         tech: PropTypes.array,
//         title: PropTypes.string,
//     };


//     render() {
//         const { demo, description, github, hasImageBorder, images, inspiration, tech, title } = this.props;
//         return (
//             <div className="Project__container">
//                 <div className="Project__info__container">
//                     <h2 className="Project__title">
//                         { title }
//                     </h2>
//                     <div className="Project__about">
//                         {inspiration && (
//                             <div className="Project__inspiration">
//                                 <h4 clas3sName="Project__inspiration__title">
//                                     Inspired by:
//                             </h4>
//                                 <a className="Project__inspiration__link"
//                                     href={inspiration.link_src}
//                                     rel="noopener noreferrer" target="_blank">
//                                     {inspiration.title}
//                                 </a>
//                             </div>
//                         )}
//                         <span>
//                             {/* {inspiration.title} */}
//                         </span>
//                         {demo && (
//                             <p>
//                                 <Link
//                                     to={demo}
//                                     isButton
//                                 >
//                                     Demo
//                                 </Link>
//                             </p>
//                         )}
//                         <div>
//                             { description }
//                         </div>

//                         {github && (
//                             <p>
//                                 <FontAwesomeIcon className="Project__link__icon" icon={faGithub} />
//                                 <Link to={github} className="Project__inspiration__link">
//                                     Github
//                                  </Link>
//                             </p>
//                         )}
//                     </div>
//                     <div className="Project__tech__section">
//                         <Label className="Project__tech__title" category="primary">
//                             tools
//                         </Label>
//                         {Object.keys(tech).map((key) =>
//                             <Label className="Project__tech"
//                                 key={key}
//                             >
//                             { tech[key] }
//                             </Label>
//                         )}
//                     </div>
//                 </div>
//                 <div className={classNames("Project__image__container", {
//                     'Project__image__container--has-link': demo
//                 })}>

//                     {images.map((image, i) => (
//                         <Link
//                             key={i}
//                             className="Project__image__link"
//                             to={demo}
//                         >
//                             <img className={classNames("Project__image", {
//                                 "Project__image--hasBorder": hasImageBorder
//                             })}
//                                 src={require(`./images/${image}.png`)}
//                                 alt="Project"
//                             />
//                             {demo && (
//                                 <div className="Project__image__action">
//                                     <Button
//                                         className="Project__image__button"
//                                         category="secondary"
//                                 >
//                                     Go to demo
//                                     </Button>
//                                 </div>
//                             )}
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         );
//     }
// }

export default Project;