import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Img from "gatsby-image";
import { TwitterShareButton, TwitterIcon } from "react-share";
import Button from "components/_ui/Button/Button";
import Link from "components/_ui/Link/Link";
import Layout from "components/Layout/Layout";
import PostGoals from "components/Post/PostGoals";
import PostTOC from "components/Post/PostTOC";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import './Post.scss';

const Post = ({ children, className, heroImg, path, goals, title, demo, repo }) => {
    return (
        <Layout className={classNames(className, "Post")}>
            <div className="Post__clump">
                <h1>
                    {title}
                </h1>
                <div className="Post__metas">
                    <div className="Post__date">
                        September 10, 2019
                        </div>
                    <div className="Post__social">
                        <TwitterShareButton
                            url={`https://marguerite.io${path}`}
                            title={title}
                            className="Post__social__share-button">
                            <span>Tweet this!</span>
                            <TwitterIcon
                                size={32}
                                round />
                        </TwitterShareButton>
                    </div>
                </div>
            </div>

            <Img fluid={heroImg} />

            <MaxWidth className="Post__content">
                <div className="Post__links">
                    {demo && (
                        <Link
                            className="Post__link Post__link__button"
                            doOpenInNewTab
                            isButton
                            to={demo}>
                            Demo site
                        </Link>
                    )}
                    {repo && (
                        <Link
                            className="Post__link"
                            doOpenInNewTab
                            to={repo}>
                            Github repo
                        </Link>
                    )}
                </div>

                <div>
                    <PostGoals
                        title="Part 1: Goals"
                        goals={goals}/>
                    {children}
                </div>

                <PostTOC>
                    <div className="PostTOC__item">
                        Goals
                    </div>
                    <div className="PostTOC__item">
                        Who this is for
                    </div>
                    <div className="PostTOC__item">
                        Setting up tools and files
                    </div>
                    <div className="PostTOC__item">
                        Walking through HTML, CSS, and JS files
                    </div>
                    <div className="PostTOC__item">
                        Running our local environment
                    </div>
                    <div className="PostTOC__item">
                        Editing the files
                    </div>
                    <div className="PostTOC__item">
                        Now what?
                </div>
                </PostTOC>
            </MaxWidth>
        </Layout>
    );
};

Post.propTypes = {

};

export default Post;