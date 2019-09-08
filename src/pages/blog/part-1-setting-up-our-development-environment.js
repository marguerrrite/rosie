import React from "react";
import { graphql } from 'gatsby';
import Intro from "components/Blog/DevTutorial/Part1/Intro";
import Post from "components/Post/Post";

const PostPartOne = () => {
    return (
        <Post>
            <Intro />
        </Post>
    )
}

export default PostPartOne;