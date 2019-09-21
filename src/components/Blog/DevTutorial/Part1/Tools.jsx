import React from "react";
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Terminal from "components/_ui/Terminal/Terminal";

const Tools = ({ data }) => {
    return (
        <StaticQuery
            query={DEV_TUT_PART_1_TOOLS}
            render={data => (
                <>
                    <div className="Post__clump">
                        <h2>
                            Setting up tools and files
                        </h2>
                        <ul>
                            <li>
                                <strong>Terminal:</strong> iTerm2 <i>(optional)</i>
                            </li>
                            <li>
                                <strong>Node and npm</strong>
                            </li>
                            <li>
                                <strong>Server:</strong> Live Server
                            </li>
                            <li>
                                <strong>Text editor:</strong> Visual Studio Code
                            </li>
                            <li>
                                <strong>Sample project:</strong> HTML, CSS, and JavaScript files <i>(optional)</i>
                            </li>
                        </ul>
                    </div>
                    <div className="Post__clump">
                        <h2>
                            Terminal
                        </h2>
                        <p>
                            The terminal is an interface to our operating system’s shell. The shell is a command line interpreter for running programs that translates commands into calls to the kernal. The kernal is the core of our operating system.
                        </p>
                        <p>
                            Mac and Linux operating systems have a Bash shell, but other shells, like z-shell, can be used. More here.
                        </p>
                        {/* <p>
                            The terminal is an interface in which you can type and execute text based commands. We'll be covering
                            some common commands you'll be using. If you're ever unsure of a command—look it up! You don't want
                            to compromise your machine.
                        </p> */}
                        <p>
                            When you open the Terminal on your machine, it will look something like this:
                        </p>
                    </div>
                    <Terminal />
                    <div className="Post__clump">
                        <h2>
                            Setting up tools and files
                        </h2>
                        <ul>
                            <li>
                                <strong>Terminal:</strong> iTerm2 <i>(optional)</i>
                            </li>
                            <li>
                                <strong>Node and npm</strong>
                            </li>
                            <li>
                                <strong>Server:</strong> Live Server
                            </li>
                            <li>
                                <strong>Text editor:</strong> Visual Studio Code
                            </li>
                            <li>
                                <strong>Sample project:</strong> HTML, CSS, and JavaScript files <i>(optional)</i>
                            </li>
                        </ul>
                    </div>
                    <div className="Post__clump">
                        <h2>
                            Setting up tools and files
                        </h2>
                        <ul>
                            <li>
                                <strong>Terminal:</strong> iTerm2 <i>(optional)</i>
                            </li>
                            <li>
                                <strong>Node and npm</strong>
                            </li>
                            <li>
                                <strong>Server:</strong> Live Server
                            </li>
                            <li>
                                <strong>Text editor:</strong> Visual Studio Code
                            </li>
                            <li>
                                <strong>Sample project:</strong> HTML, CSS, and JavaScript files <i>(optional)</i>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        />
    );
};

Tools.propTypes = {

};

export default Tools;

export const DEV_TUT_PART_1_TOOLS = graphql`
    query {
        hero: file(relativePath: { eq: "2019-0918-part-1/hero.png" }) {
            childImageSharp {
                fluid(maxWidth: 2500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
   }
`