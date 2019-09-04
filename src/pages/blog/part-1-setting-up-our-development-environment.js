import React from "react";
import { graphql } from 'gatsby';
import Img from "gatsby-image";
import Link from "components/_ui/Link/Link";
import Post from "components/Post/Post";
import { TwitterShareButton, TwitterIcon } from "react-share";
import simonBoggs from "images/2019-0918-part-1/simon-boggs.gif";
import "./part-1-setting-up-our-development-environment.scss";

const PostPartOne = ({ data }) => {
    return (
        <Post className="Post-part1">
            <h1>
                Part 1: Setting up our dev environment and running a site
            </h1>
            <div className="Post__metas">
                <div className="Post__date">
                    September 10, 2019
                </div>
                <div className="Post__social">

                    <TwitterShareButton
                        url={"https://marguerite.io"}
                        title={"Part 1: Setting up our dev environment and running a site"}
                        className="Post__social__share-button">
                        <span>Tweet this!</span>
                        <TwitterIcon
                            size={32}
                            round />
                    </TwitterShareButton>
                </div>
            </div>
            <div className="Post__clump">
                <p>
                    Setting up a local web development environment allows you to play with new tools, languages, and any kind of project you're working on without having to deploy publicly.
                </p>
            </div>
            <div className="Post__clump">
                <Img
                    className="Post__image Post__image--size-xl"
                    fluid={data.hero.childImageSharp.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt="Desktop shoping terminal, text editor, and demo project website."
                />
            </div>
            <div className="Post__clump">
                <p>
                    In <strong>Part 1</strong> of this tutorial, we will collect the tools needed to spin up and edit a website. By the end, you will have a local environment set up and the space needed to start working on a project. 👏
                </p>
            </div>
            <div className="Post__clump">
                <h2>
                    Who this is for
                </h2>
                <p>
                    You might be a:
                </p>
                <ul>
                    <li>
                        Designer
                    </li>
                    <li>
                        Data Scientist
                    </li>
                    <li>
                        Web Developer
                    </li>
                    <li>
                        Interested person at any skill level looking to create a website (Welcome! 🎉)
                    </li>
                </ul>
            </div>
            <div className="Post__clump">
                <p>
                    This tutorial is broken down into three parts:
                </p>
                <ul>
                    <li>
                        <strong>Part 1:</strong> Setting up our environment and running a project locally in our browser (You are here! 🏁)
                    </li>
                    <li>
                        <strong>Part 2:</strong> Committing our work to Github
                    </li>
                    <li>
                        <strong>Part 3:</strong> Deploying with Netlify
                    </li>
                </ul>
            </div>
            <div className="Post__clump">
                <p>
                    We will be tackling a pure HTML, CSS, and JavaScript project - not incorporating any frontend frameworks like <Link to="https://reactjs.org/" doOpenInNewTab>React</Link>, <Link to="https://vuejs.org/" doOpenInNewTab>Vue</Link>Vue, or <Link to="https://angular.io/" doOpenInNewTab>Angular</Link>. We'll save those for a rainy day.
                </p>
                <p className="Post--style-ital">
                    This tutorial shows a macOS environment, but you can apply the methods to other operating systems.
                </p>
                <p>
                    Let's go! 🚀
                </p>
            </div>

            <div className="Post__clump">
                <h2>
                    Tools and files
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
                    Terminal commands used in this tutorial
                </h2>
                <p>
                    TBD
                </p>
            </div>

            <div className="Post__clump">
                <h2>
                    Terminal: <Link to="https://www.iterm2.com/index.html" doOpenInNewTab>iTerm2</Link> <i>(optional)</i>
                </h2>
                <p>
                    <i>Feel free to skip installing iTerm2. Your default Terminal will work for this tutorial.</i>
                </p>
                <Img
                    className="Post__image Post__image--size-l"
                    fluid={data.itermHomepage.childImageSharp.fluid}
                    alt="iTerm2 homepage"
                />
            </div>
            <div className="Post__clump">
                <p>
                    iTerm2 is a replacement for the Terminal that comes installed on your macOS machine. Here is a deep dive on what iTerm2 has to offer. 
                </p>
                <p>
                    To install, head to <Link to="https://www.iterm2.com/" doOpenInNewTab>iterm2.com</Link>, download, and follow the installation instructions.
                </p>
            </div>

            <div className="Post__clump">
                <h2>
                    <Link to="https://nodejs.org/en/" doOpenInNewTab>Node</Link> and npm
                </h2>
                <Img
                    className="Post__image Post__image--size-l"
                    fluid={data.nodeHomepage.childImageSharp.fluid}
                    alt="Node.js homepage"
                />
            </div>
            <div className="Post__clump">
                <p>
                    <Link to="https://nodejs.org/en/" doOpenInNewTab>Node</Link> is a run-time environment for JavaScript. I.E. it helps you execute JavaScript code.
                </p>
                <p>
                    You might already have Node installed. To check, run this line in your terminal and hit enter:
                </p>
                <pre>
                    <code>
                        node -v
                    </code>
                </pre>
            </div>
            <div className="Post__clump">
                <Img
                    className="Post__image Post__image--size-l"
                    fluid={data.terminalCheckNode.childImageSharp.fluid}
                    alt="Terminal showing Node version"
                />
            </div>
            <div className="Post__clump">
                <p>
                    If Node is not installed, the terminal will say so. Head to <Link to="https://nodejs.org/en/" doOpenInNewTab>nodejs.org</Link>, download, and follow the installation instructions.
                </p>
            </div>

            {/* Hold for NPM? */}

            <div className="Post__clump">
                <h2>
                    Server: <Link to="https://www.npmjs.com/package/live-server" doOpenInNewTab>Live server</Link>
                </h2>
                <p>
                    This application runs on your computer with the use of server software and allows you to run the JavaScript you've written for your project. Essentially, this mimics a server that your website will be deployed on once it's out on the internet.
                </p>
                <p>
                    <Link to="https://www.npmjs.com/package/live-server" doOpenInNewTab>Live server</Link> is a wonderful and free development server with a hot reload capability (anytime you save a change, the server will automatically refresh your browser tab so you don't have to).
                </p>
                <p>
                    To install, open your terminal and run (to install globally):
                </p>
                <pre>
                    <code>
                        npm install -g live-server
                    </code>
                </pre>
            </div>
            <div className="Post__clump">
                <div className="Post__note">
                    <p>
                        If you are seeing permission errors, you might need to add <code>sudo</code> to the beginning of this command to give admin access. For newcomers, <code>sudo</code> gives you super user permission to modify your computer. This is common for those using macOS.
                    </p>
                    <Link
                        className="Post__note__link"
                        to="https://superuser.com/questions/185441/what-does-the-sudo-command-do"
                        doOpenInNewTab
                    >
                        More about <i>sudo</i>
                    </Link>
                </div>
                <pre>
                    <code>
                        sudo npm install -g live-server
                    </code>
                </pre>
            </div>

            <div className="Post__clump">
                <h2>
                    Text editor: <Link to="https://code.visualstudio.com/" doOpenInNewTab>Visual Studio Code</Link> <i>(optional)</i>
                </h2>
                <p>
                    <i>You may already have a text editor you prefer to you. Skip this section if you don't need to install VSCode.</i>
                </p>
                <Img
                    className="Post__image Post__image--size-l"
                    fluid={data.vsCodeHomepage.childImageSharp.fluid}
                    alt="Visual Studio Code homepage"
                />
            </div>
            <div className="Post__clump">
                <p>
                    I switched to using VSCode last year and like the large <Link to="https://marketplace.visualstudio.com/vscode" doOpenInNewTab>extension library</Link> and <Link to="https://code.visualstudio.com/docs/getstarted/themes" doOpenInNewTab>themes</Link> available. (Regarding themes: I prefer light text editor themes as toggling between a light browser and dark editor causes eye strain for me. I am currently using the <Link to="https://marketplace.visualstudio.com/items?itemName=thenikso.github-plus-theme" doOpenInNewTab>GitHub Plus theme</Link>, seen in the screenshots in this tutorial).
                </p>
                <p>
                    To install, head to <Link to="https://code.visualstudio.com" doOpenInNewTab>code.visualstudio.com</Link>, download, and follow the installation instructions.
                </p>
                <p>
                    Other editors your can use:
                </p>
                <ul>
                    <li>
                        <Link to="https://www.sublimetext.com/" doOpenInNewTab>Sublime Text</Link>
                    </li>
                    <li>
                        <Link to="https://atom.io/" doOpenInNewTab>Atom</Link>
                    </li>
                </ul>
            </div>

            <div className="Post__clump">
                <h2>
                    Project files and organization
                </h2>
                <p>
                    To keep my dev projects organized, in my User root folder, I have a folder named <code>repos</code> that holds all projects and github repos in subdirectories.
                </p>
                <Img
                    className="Post__image Post__image--size-l"
                    fluid={data.finderOrganization.childImageSharp.fluid}
                    alt="Finder folder organization"
                />
            </div>
            <div className="Post__clump">
                <p>
                    When you open a new terminal window, it will default your User root folder (for me that is margueriteroth). By having my repos folder here, I can easily navigate my terminal to the repos  folder and a project. I suggest keeping your projects in a similar folder. 
                </p>
                <p>
                    To create a new folder in your User root (your name) via the command line, open your terminal and make a repos folder:
                </p>
                <pre>
                    <code>
                        mkdir repos
                    </code>
                </pre>
            </div>
            <div className="Post__clump">
                <p>
                    Navigate inside your repos folder:
                </p>
                <pre>
                    <code>
                        cd repos
                    </code>
                </pre>
            </div>
            <div className="Post__clump">
                <p>
                    And copy the project files to your computer by cloning the github repo:
                </p>
                <pre>
                    <code>
                        git clone git@github.com:margueriteroth/our-new-project.git
                    </code>
                </pre>
            </div>
            <div className="Post__clump">
                <Img
                    className="Post__image Post__image--size-l"
                    fluid={data.terminalGitClone.childImageSharp.fluid}
                    alt="Terminal showing git-clone command"
                />
            </div>
            <div className="Post__clump">
                <p>
                    After downloading from github, this directory should appear in your repos directory. To navigate your terminal into this new project folder, run:
                </p>
                <pre>
                    <code>
                        cd our-new-project
                    </code>
                </pre>
                <p>
                    Here you will find our three project files: <strong>index.html</strong>, <strong>styles.css</strong>, and <strong>scripts.js</strong> (the README.md is only used for the github repo description. Ignore for now.):
                </p>
            </div>

            <div className="Post__clump">
                <h2>
                    Walking through the HTML, CSS, and JavaScript files
                </h2>
            </div>
            <div className="Post__clump">
                <h3>
                    index.html
                </h3>
                <p>
                    The default page for sites is index.html. <Link to="https://developer.mozilla.org/en-US/docs/Web/HTML" doOpenInNewTab>HTML</Link> stands for Hypertext Markup Language. A markup language is a set of instructions on how to create a document, like a webpage for your browser.
                </p>
                <div className="Post__pullquote">
                    <p>
                        HTML uses "markup" to annotate text, images, and other content for display in a Web browser. HTML markup includes special "elements" such
                        as {htmlElements.map((elem, i) => (
                            <React.Fragment key={i}>
                                {i === (htmlElements.length - 1) ? (
                                    <span>
                                        and <code>&lt;{elem}&gt;</code> </span>
                                ) : (
                                        <span>
                                            <code>&lt;{elem}&gt;</code>, </span>

                                    )}
                            </React.Fragment>
                        ))} and many others.
                    </p>
                    <Link
                        className="Post__pullquote__link"
                        to="https://developer.mozilla.org/en-US/docs/Web/HTML"
                        doOpenInNewTab>
                        From the MDN web docs
                    </Link>
                </div>
            </div>

            <div className="Post__clump">
                <h3>
                    styles.css
                </h3>
                <p>
                    <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS" doOpenInNewTab>CSS</Link> stands for Cascading Style Sheets and it is a styling language used to style the HTML elements (ie. element size, color, placement, font, etc.). Within a CSS file, you target <Link to="https://www.reddit.com/r/explainlikeimfive/comments/1jlmd5/eli5_did_a_search_and_im_surprised_this_hasnt/" doOpenInNewTab>DOM</Link> elements using ids, classes, tags, and style using CSS syntax.
                </p>
                <p>
                    You may have seen <Link to="https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor" doOpenInNewTab>CSS preprocessor</Link> files around: <Link to="http://lesscss.org/" doOpenInNewTab>.less</Link>, <Link to="https://sass-lang.com/" doOpenInNewTab>.sass</Link>, and <Link to="https://sass-lang.com/documentation/syntax" doOpenInNewTab>.scss</Link>, and a few others. Preprocessors are CSS-like language that compiles into CSS for use by a browser. They allow us to write CSS with less repetition and added functionally like <Link to="https://sass-lang.com/documentation/at-rules/mixin" doOpenInNewTab>mixins</Link> and <Link to="https://sass-lang.com/documentation/functions/color" doOpenInNewTab>color functions</Link>.
                </p>
                <p>
                    To keep things simple, we are sticking with regular CSS for this tutorial.
                </p>
            </div>

            <div className="Post__clump">
                <h3>
                    scripts.js
                </h3>
                <p>
                    This is where our JavaScript lives. <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript" doOpenInNewTab>JavaScript</Link> is a client side scripting language used by your browser - it makes our static page intelligent (not to be confused with the <Link to="https://en.wikipedia.org/wiki/Java_(programming_language)" doOpenInNewTab>Java programming language</Link>). With JavaScript, you can do things like complex interactions, calculations, and more.
                </p>
                <p>
                    <Link to="https://jquery.com/" doOpenInNewTab>JQuery</Link>, <Link to="https://momentjs.com/" doOpenInNewTab>Moment</Link>, and <Link to="https://d3js.org/" doOpenInNewTab>d3</Link> are examples of common JavaScript libraries.
                </p>
            </div>

            <div className="Post__clump">
                <h2>
                    Running our local environment
                </h2>
                <p>
                    Now that we have installed all of our tools and downloaded the sample project, it is time to fire this baby up.
                </p>
                <p>
                    Open your terminal and navigate from your User root folder to the project files folder.
                </p>
                <pre>
                    <code>
                        cd our-new-project
                    </code>
                </pre>
            </div>
            <div className="Post__clump">
                <p>
                    For the server to run our project, the server command needs to run while in the project folder, which we just navigated to in the step above. This is where our html, css, and js files live. Otherwise, the server won't know which files to serve.
                </p>
                <p>
                    Start the server 🔥
                </p>
                <pre>
                    <code>
                        live-server
                    </code>
                </pre>
            </div>
            <div className="Post__clump">
                <p>
                    A browser tab should automatically open at <Link to="http://127.0.0.1:8080/" doOpenInNewTab>http://127.0.0.1:8080/</Link>
                </p>
            </div>
            <div className="Post__clump">
                <Img
                    className="Post__image Post__image--size-m"
                    fluid={data.terminalRunningServer.childImageSharp.fluid}
                    alt="Terminal showing server starting up"
                />
            </div>
            <div className="Post__clump">
                <Img
                    className="Post__image Post__image--size-l"
                    fluid={data.browserSiteOpen.childImageSharp.fluid}
                    alt="Browser showing sample site running"
                />
            </div>

            <div className="Post__clump">
                <h2>
                    Editing the files
                </h2>
                <p>
                    Start VSCode and open the <code>our-new-project</code> folder. Your terminal is already running the <code>live-server</code> from this same folder location.
                </p>
            </div>
            <div className="Post__clump">
                <Img
                    className="Post__image Post__image--size-l"
                    fluid={data.vscodeOpenFolder.childImageSharp.fluid}
                    alt="VSCode starting screen"
                />
            </div>
            <div className="Post__clump">
                <Img
                    className="Post__image Post__image--size-l"
                    fluid={data.vscodeProjectOpen.childImageSharp.fluid}
                    alt="VSCode showing index.html, scripts.js, and styles.css open"
                />
            </div>
            <div className="Post__clump">
                <p>
                    In <code>index.html</code> we have a basic html structure with our content inside of the <code>&lt;body&gt;</code> tag.
                </p>
                <p>
                    To see hot reload in action, let's edit the <code>&lt;h1&gt;</code> and save.
                </p>
            </div>
            <div className="Post__clump">
                <h3>
                    We did it!
                </h3>
            </div>
            <div className="Post__clump">
                <h3>
                    . . .
                </h3>
            </div>

            <div className="Post__clump">
                <h2>
                    Now what?
                </h2>
                <p>
                    The world is our oyster. Continue editing the <code>index.html</code> and <code>styles.css</code> files to adjust and style the content, or jump into scripts.js to start writing some JavaScript.
                </p>
            </div>
            <div className="Post__clump">
                <Img
                    className="Post__image Post__image--size-l"
                    fluid={data.vscodeAddScripts.childImageSharp.fluid}
                    alt="VSCode showing index.html importing scripts in <head>"
                />
            </div>
            <div className="Post__clump">
                <p>
                    Add library scripts in the <code>&lt;head&gt;</code> tag of <code>index.html</code> like <Link to="https://d3js.org/" doOpenInNewTab>d3</Link> or <Link to="https://getbootstrap.com/" doOpenInNewTab>bootstrap</Link>. They will then be available to use in  <code>scripts.js</code> and <code>styles.css</code>.
                </p>
            </div>
            <div className="Post__clump">
                <p>
                    <img src={simonBoggs} alt="Sega karate chop gif from She's All That" />
                </p>
                <p>
                    Pretty cool, right?
                </p>
            </div>

        </Post>
    )
}

export default PostPartOne;

const htmlElements = [
    "head",
    "title",
    "body",
    "header",
    "footer",
    "article",
    "section",
    "p",
    "div",
    "span",
    "img",
    "aside",
    "audio",
    "canvas",
    "datalist",
    "details",
    "embed",
    "nav",
    "output",
    "progress",
    "video",
    "ul",
    "ol",
    "li",
]

export const query = graphql`
    query {
        hero: file(relativePath: { eq: "2019-0918-part-1/hero.png" }) {
            childImageSharp {
                fluid(maxWidth: 2500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        itermHomepage: file(relativePath: { eq: "2019-0918-part-1/iterm-homepage.png" }) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        nodeHomepage: file(relativePath: { eq: "2019-0918-part-1/node-homepage.png" }) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        terminalCheckNode: file(relativePath: { eq: "2019-0918-part-1/terminal-check-node.png" }) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        vsCodeHomepage: file(relativePath: { eq: "2019-0918-part-1/vscode-homepage.png" }) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        finderOrganization: file(relativePath: { eq: "2019-0918-part-1/finder-folder-organization.png" }) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        terminalGitClone: file(relativePath: { eq: "2019-0918-part-1/terminal-git-clone.png" }) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        terminalRunningServer: file(relativePath: { eq: "2019-0918-part-1/terminal-running-server.png" }) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        browserSiteOpen: file(relativePath: { eq: "2019-0918-part-1/browser-site-open.png" }) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        vscodeOpenFolder: file(relativePath: { eq: "2019-0918-part-1/vscode-open-folder.png" }) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        vscodeProjectOpen: file(relativePath: { eq: "2019-0918-part-1/vscode-project-open.png" }) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        vscodeAddScripts: file(relativePath: { eq: "2019-0918-part-1/vscode-add-scripts.png" }) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
   }
`