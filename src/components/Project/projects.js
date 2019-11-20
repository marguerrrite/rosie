import React from "react";

const projects = {
    currents: {
        title: "Currents Dashboard",
        projectType: "dashboard",
        description: <div>
            A look into the Current's Attention analytics dashboard built at Parse.ly.
        </div>,
        readMore: "./currents",
        "tech": [
            "react",
            "redux",
            "d3",
            "mixpanel",
            "figma"
        ],
        hasImageBorder: true,
        imgType: "mp4",
        "img_src": [
            "project-currents-01"
        ],
    },
    prist: {
        title: "Prist | A Gatsby & Prismic Starter",
        projectType: "web",
        description: <div>
            A light-themed starter powered
            by <a href="https://www.gatsbyjs.org/" rel="noopener noreferrer" target="_blank">Gatsby v2</a> and <a href="https://www.gatsbyjs.org/" rel="noopener noreferrer" target="_blank">Prismic</a> to showcase portfolios and blogs.
            <br />
            <br />
            <a href="https://www.gatsbyjs.org/starters/margueriteroth/gatsby-prismic-starter-prist/" rel="noopener noreferrer" target="_blank">Gatsby starter doc</a>
        </div>,
        demo: "https://prist.marguerite.io/",
        github: "https://github.com/margueriteroth/gatsby-prismic-starter-prist",
        "tech": [
            "gatsby",
            "graphql",
            "cms",
            "react",
            "figma",
            "netlify",
        ],
        hasImageBorder: true,
        "img_src": [
            "project-prist-01"
        ],
    },
    dvs: {
        title: "Data Visualization Society Member Map",
        projectType: "web",
        description: <div>
            The <a href="https://www.datavisualizationsociety.com/" rel="noopener noreferrer" target="_blank">Data Visualization Society</a> asked
            members to rank their skills in the following categories: data, visualization, and society.
            <br />
            <br />
            I mapped the location of each
            member with the ability to filter by their highest ranked skill
            to show the distribution of each around the world.
        </div>,
        demo: "/dvs",
        github: "https://github.com/margueriteroth/flagg/tree/master/src/components/Map",
        "tech": [
            "react",
            "d3",
            "data",
        ],
        "img_src": [
            "project-dvs-01"
        ],
    },
    retention: {
        title: "Parse.ly Analytics Data Retention Upsells",
        projectType: "web",
        description: <div>
            Working through adding more obvious data retention limit communication in the analytics dashboard and allowing users to upgrade.
        </div>,
        readMore: "/data-retention",
        "tech": [
            "angular",
            "less",
            "figma",
        ],
        hasImageBorder: true,
        "img_src": [
            "project-data-retention-01"
        ],
    },
    albondiga: {
        title: "Albondiga | App for requesting some dinner 🍝",
        projectType: "web",
        description: "I developed this project as a birthday gift for my partner — a lover of spaghetti and meatballs. The recipient can pick the ingredients making up a spaghetti and meatballs dinner: pasta type, sauce, drinks, etc.",
        demo: "https://margueriteroth.github.io/albondiga/",
        github: "https://github.com/margueriteroth/albondiga",
        "tech": [
            "react",
            "firebase",
            "scss",
            "bem",
            "node"
        ],
        "img_src": [
            "project-albondiga-01"
        ],
    },
};

export default projects;