import React from "react";
import Layout from "components/Layout/Layout";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import BookshelfContainer from "components/Bookshelf/BookshelfContainer";
import Project from "components/Project/Project";
import ProjectCrochet from "components/Project/ProjectCrochet";
import projects from "components/Project/projects.js";

const Work = () => (
    <Layout className="Layout--work">
        <MaxWidth>
            {/* <h1>
                Work
            </h1> */}
            <ProjectCrochet />
            {Object.keys(projects).map((key) =>
                <Project
                    demo={projects[key].demo}
                    description={projects[key].description}
                    github={projects[key].github}
                    hasImageBorder={projects[key].hasImageBorder}
                    images={projects[key].img_src}
                    inspiration={projects[key].inspiration}
                    projectType={projects[key].projectType}
                    tech={projects[key].tech}
                    title={projects[key].title}
                    key={key}
                />
            )}
            <BookshelfContainer />
        </MaxWidth>
    </Layout>
)

export default Work;

