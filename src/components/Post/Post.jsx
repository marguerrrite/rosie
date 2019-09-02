import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Layout from "components/Layout/Layout";
import './Post.scss';

const Post = ({ children, className }) => {
    return (
        <Layout className={classNames(className, "Post")}>
            {children}
        </Layout>
    );
};

Post.propTypes = {

};

export default Post;