import React from "react"
import Img from "gatsby-image"
import PropTypes from 'prop-types';
import MaxWidth from 'components/_ui/MaxWidth/MaxWidth'
import './PageHero.scss';
import videoCurrents from 'content/work/2019-11-25-currents/currents-info.mp4';
import imgStory from 'content/work/2019-11-25-currents/currents-story.png';
import imgMap from 'content/work/2019-11-25-currents/currents-map.png';
import imgRefCats from 'content/work/2019-11-25-currents/currents-ref-categories.png';
import imgTimeline from 'content/work/2019-11-25-currents/currents-timeline.png';


const PageHero = ({className, page, image}) => {
    return (
        <>
            {page === 'currents' ? (
                <div className="PageHeroCurrents__container">
                    <MaxWidth size="l" className="PageHeroCurrents">
                        <div className="PageHeroCurrents__img__container">
                            <div className="PageHeroCurrents__img__left">
                                <img alt="Referrer categories" className="PageHeroCurrents__img PageHeroCurrents__img--cats" src={imgRefCats} />
                            </div>
                            <div className="PageHeroCurrents__img__right">
                                <img alt="Story sampling" className="PageHeroCurrents__img PageHeroCurrents__img--story" src={imgStory} />
                                <img alt="Traffic map" className="PageHeroCurrents__img PageHeroCurrents__img--map" src={imgMap} />
                            </div>
                        </div>
                        <div className="PageHeroCurrents__video__container">
                            <video className="PageHeroCurrents__video"
                                autoPlay loop muted playsInline
                                poster={imgTimeline}
                            >
                                <source src={videoCurrents} type="video/mp4" />
                            </video>
                        </div>
                    </MaxWidth>
                </div>
            ) : (
                <MaxWidth size="l" className="PageHero__container">
                    <Img fluid={image} />
                </MaxWidth>
            )}
        </>
    );
};

PageHero.propTypes = {
    page: PropTypes.string,
    image: PropTypes.object,
};

export default PageHero;