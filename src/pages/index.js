import React from "react"
import Link from "components/_ui/Link/Link"
import ContestantHead from "components/Bachelor/ContestantHead"
import Intro from "components/Intro/Intro"
import Layout from "components/Layout/Layout"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import BookshelfContainer from "components/Bookshelf/BookshelfContainer";
import Project from "components/Project/Project";
import ProjectCrochet from "components/Project/ProjectCrochet";
import projects from "components/Project/projects.js";
import SEO from "components/SEO/SEO"

const Home = () => (
    <Layout showNavigation showSocialCol showFooter>
        <SEO />
        <Intro />
        <MaxWidth className="Home__recent">
            <div>
                <h2>
                    Recent Project
                </h2>
                <Link to="/2020-bachelor" className="Home__recent__item Home__recent__item--project">
                    <ContestantHead name="Deandra" />
                    <div>
                        <h3>
                            Bachelor 2020 Contestant Guide
                        </h3>
                        <p>
                            Updating weekly with episode information and improved components.
                        </p>
                    </div>

                </Link>
            </div>
            <div>
                <h2>
                    Recent Post
                </h2>
                <Link to="/blog/set-up-local-website"
                    className="Home__recent__item Home__recent__item--post">
                    <div>
                        <h3>
                            Set up a local dev environment and run a website
                        </h3>
                        <p>
                            Collect and utilize the tools needed to spin up and edit a website on your computer.
                            Basic HTML/CSS/JS, D3.js, and Twitter Bootstrap starters provided.
                        </p>
                    </div>

                </Link>
            </div>
        </MaxWidth>
        <MaxWidth id="work" className="Home__projects">
            <h1>
                Selected Work
            </h1>
            {Object.keys(projects).map((key) =>
                <Project
                    demo={projects[key].demo}
                    description={projects[key].description}
                    github={projects[key].github}
                    hasImageBorder={projects[key].hasImageBorder}
                    images={projects[key].img_src}
                    imgType={projects[key].imgType}
                    inspiration={projects[key].inspiration}
                    projectType={projects[key].projectType}
                    tech={projects[key].tech}
                    title={projects[key].title}
                    readMore={projects[key].readMore}
                    key={key}
                />
            )}
            <ProjectCrochet />
            <BookshelfContainer />
        </MaxWidth>
    </Layout>
);

export default Home;
