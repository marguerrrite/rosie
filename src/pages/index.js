import React from "react"
import Intro from "components/Intro/Intro"
import Layout from "components/Layout/Layout"
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import BookshelfContainer from "components/Bookshelf/BookshelfContainer";
import Project from "components/Project/Project";
import ProjectCrochet from "components/Project/ProjectCrochet";
import projects from "components/Project/projects.js";
import SEO from "components/SEO/SEO"

const Home = () => (
    <Layout>
        <SEO />
        <Intro />
        <MaxWidth id="work" className="Home__projects">
            <h1>
                Work
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