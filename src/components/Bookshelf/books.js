import React from "react";
//Help — book API, where r u? GoogleBooks? wip
//Summaries and images from goodreads.com

const books = [
    {
        title: "In Cold Blood",
        author: "Truman Capote",
        finished: false,
        inProgress: true,
        "tags": [
            "fiction",
            "true crime",
        ],
        isFiction: false,
        genre: "true crime",
        goodreadsUrl: "https://www.goodreads.com/book/show/168642.In_Cold_Blood",
        coverImg: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1424931136l/168642.jpg",
        summary: <div>
            <p>
                On November 15, 1959, in the small town of Holcomb, Kansas, four members of the Clutter family were savagely murdered by blasts from a shotgun held a few inches from their faces. There was no apparent motive for the crime, and there were almost no clues.
            </p>
            <p>
                As Truman Capote reconstructs the murder and the investigation that led to the capture, trial, and execution of the killers, he generates both mesmerizing suspense and astonishing empathy. At the center of his study are the amoral young killers Perry Smith and Dick Hickcock, who, vividly drawn by Capote, are shown to be reprehensible yet entirely and frighteningly human. <i>In Cold Blood</i> is a seminal work of modern prose, a remarkable synthesis of journalistic skill and powerfully evocative narrative.
            </p>
        </div>
    },
    {
        title: "Show Me the Numbers: Designing Tables and Graphs to Enlighten",
        author: "Stephen Few",
        finished: false,
        inProgress: true,
        "tags": [
            "non-fiction",
            "technology",
        ],
        genre: "technology",
        isFiction: false,
        goodreadsUrl: "https://www.goodreads.com/book/show/543936.Show_Me_the_Numbers?from_search=true&qid=oh4cRBMmJu&rank=1",
        coverImg: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328862683l/543936.jpg",
        summary: <div>
            <p>
                Tables and graphs can more adequately communicate important business information when they reflect the good design practices discussed in this practical guide to effective table and graph design. Information is provided on the fundamental concepts of table and graph design, the numbers and knowledge most suitable for display in a graphic form, the best tabular means to communicate certain ideas, and the component-level aspects of design. Analysts, technicians, and managers will appreciate the solid theory behind this outline for ensuring that tables and graphs present quantitative business information in a truthful, attractive format that facilitates better decision making.
            </p>
        </div>
    },
    {
        title: "Fullstack D3 and Data Visualization: Build beautiful data visualizations with D3",
        author: "Amelia Wattenberger, Nate Murray (Editor)",
        finished: true,
        inProgress: false,
        "tags": [
            "non-fiction",
            "technology",
        ],
        genre: "technology",
        isFiction: false,
        goodreadsUrl: "https://www.goodreads.com/book/show/48527276-fullstack-d3-and-data-visualization",
        coverImg: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1571695804l/48527276.jpg",
        summary: <div>
            <p>
                The Fullstack D3 book is the complete guide to D3. With dozens of code examples showing each step, you can gain new insights into your data by creating visualizations.            </p>
            <p>
                Learn how to quickly turn data into insights with D3.
            </p>
            <p>
                We have the data. But it needs to be understood by humans. The best way to convert this data into an understandable format is to mold it into a data visualization.
            </p>
        </div>
    },
    {
        title: "The Art of Readable Code",
        author: "Dustin Boswell, Trevor Foucher",
        finished: true,
        inProgress: false,
        "tags": [
            "non-fiction",
            "technology",
        ],
        genre: "technology",
        isFiction: false,
        goodreadsUrl: "https://www.goodreads.com/book/show/8677004-the-art-of-readable-code",
        coverImg: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1324147949l/8677004.jpg",
        summary: <div>
            <p>
                As programmers, we’ve all seen source code that’s so ugly and buggy it makes our brain ache. Over the past five years, authors Dustin Boswell and Trevor Foucher have analyzed hundreds of examples of "bad code" (much of it their own) to determine why they’re bad and how they could be improved. Their conclusion? You need to write code that minimizes the time it would take someone else to understand it—even if that someone else is you.
            </p>
            <p>
                This book focuses on basic principles and practical techniques you can apply every time you write code. Using easy-to-digest code examples from different languages, each chapter dives into a different aspect of coding, and demonstrates how you can make your code easy to understand.
            </p>
        </div>
    },
    {
        title: "1984",
        author: "George Orwell",
        finished: true,
        inProgress: false,
        "tags": [
            "non-fiction",
            "sci-fi",
        ],
        isFiction: false,
        genre: "sci-fi",
        goodreadsUrl: "https://www.goodreads.com/book/show/40961427-1984",
        coverImg: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX318_.jpg",
        summary: <div>
            <p>
                Among the seminal texts of the 20th century, <i>Nineteen Eighty-Four</i> is a
                rare work that grows more haunting as its futuristic purgatory becomes more
                real. Published in 1949, the book offers political satirist George Orwell's
                nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's
                attempt to find individuality. The brilliance of the novel is Orwell's
                prescience of modern life—the ubiquity of television, the distortion of
                the language—and his ability to construct such a thorough version of hell.
                Required reading for students since it was published, it ranks among the most
                terrifying novels ever written.
            </p>
        </div>
    },
    {
        title: "I Know Why the Caged Bird Sings",
        author: "Maya Angelou",
        finished: false,
        audiobook: true,
        inProgress: true,
        "tags": [
            "non-fiction",
            "memoir",
        ],
        isFiction: false,
        genre: "memoir",
        goodreadsUrl: "https://www.goodreads.com/book/show/13214.I_Know_Why_the_Caged_Bird_Sings",
        coverImg: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327957927l/13214.jpg",
        summary: <div>
            <p>
                Sent by their mother to live with their devout, self-sufficient
                grandmother in a small Southern town, Maya and her brother,
                Bailey, endure the ache of abandonment and the prejudice of
                the local "powhitetrash." At eight years old and back at her
                mother’s side in St. Louis, Maya is attacked by a man many
                times her age—and has to live with the consequences for a
                lifetime. Years later, in San Francisco, Maya learns that
                love for herself, the kindness of others, her own strong
                spirit, and the ideas of great authors ("I met and fell in
                love with William Shakespeare") will allow her to be free
                instead of imprisoned.
            </p>
            <p>
                Poetic and powerful, <i>I Know Why the Caged Bird Sings</i> will touch
                hearts and change minds for as long as people read.
            </p>
        </div>
    },
    // {
    //     title: "Under the Dome",
    //     author: "Stephen King",
    //     finished: false,
    //     inProgress: true,
    //     "tags": [
    //         "non-fiction",
    //         "horror",
    //     ],
    //     isFiction: true,
    //     genre: "horror",
    //     goodreadsUrl: "https://www.goodreads.com/book/show/6320534-under-the-dome",
    //     coverImg: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1511289992l/6320534._SY475_.jpg",
    //     summary: <div>
    //         <p>
    //             On an entirely normal, beautiful fall day in Chester’s Mill, Maine, the
    //             town is inexplicably and suddenly sealed off from the rest of the world
    //             by an invisible force field. Planes crash into it and fall from the sky
    //             in flaming wreckage, a gardener’s hand is severed as “the dome” comes
    //             down on it, people running errands in the neighboring town are divided
    //             from their families, and cars explode on impact. No one can fathom what
    //             this barrier is, where it came from, and when—or if—it will go away.
    //         </p>
    //         <p>
    //             Dale Barbara, Iraq vet and now a short-order cook, finds himself teamed
    //             with a few intrepid citizens—town newspaper owner Julia Shumway, a
    //             physician’s assistant at the hospital, a selectwoman, and three brave
    //             kids. Against them stands Big Jim Rennie, a politician who will stop
    //             at nothing—even murder—to hold the reins of power, and his son, who
    //             is keeping a horrible secret in a dark pantry. But their main adversary
    //             is the Dome itself. Because time isn’t just short. It’s running out. Source: stephenking.com
    //         </p>
    //     </div>
    // },
    {
        title: "The Apology",
        author: "Eve Ensler",
        finished: true,
        "tags": [
            "non-fiction",
            "Memoir",
        ],
        isFiction: false,
        genre: "memoir",
        goodreadsUrl: "https://www.goodreads.com/en/book/show/43198851-the-apology",
        coverImg: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547758022l/43198851.jpg",
        summary: <div>
            <p>
                <b>
                    From Eve Ensler, author of one of the most influential works of the twentieth
                    century--The Vagina Monologues--and one of Newsweek's "150 Women Who Changed the World,"
                    comes a powerful, life-changing examination of abuse and atonement.
                </b>
            </p>
            <p>
                Like millions of women, Eve Ensler has been waiting much of her lifetime for an apology.
                Sexually and physically abused from the age of 5 by her father, Eve has struggled and
                suffered her whole life from this betrayal, longing for an honest reckoning from a man
                who is long dead. After years of work as an artist and anti-violence activist, she
                decided she was no longer waiting; an apology could be imagined, by her, for her,
                to her. This book, <i>The Apology</i>, written by Eve from her father's point of
                view in the words she longed to hear attempts to transform the abuse she suffered,
                with unflinching truthfulness, compassion, and an expansive vision for the future.
            </p>
            <p>
                Through <i>The Apology</i> Eve has set out to provide a new way for herself and a
                possible road for others, so that survivors of abuse may finally imagine how to be
                free. In it, she grapples with questions she has sought answers to since she began
                to understand the impact of her father's abuse on her life: <i>How do we offer a
                    doorway rather than only a locked cell? How do move from humiliation to
                    revelation, from curtailing behavior to changing it, from condemning
                    perpetrators to calling them to reckoning?</i>
            </p>
            <p>
                <i>The Apology</i> is a remarkably original book that explores the deepest and
                most intimate questions that can be asked at this moment: Why do men carry out
                abuse, often against the people they know and love the most? How can we--together--stop
                it? What does it mean to apologize for these acts? What will it take for the men who
                have committed abuse to make a deep reckoning and actually apologize? As Tony Porter
                from A Call to Men says, “We've called men out, now how do we call them in?”
            </p>
            <p>
                <i>The Apology</i> is an acutely transformational book--about how, from the wounds
                of sexual abuse, we can begin to re-emerge and heal. It is a revolutionary book
                asking everything of each of us: courage, truthfulness, and forgiveness.
            </p>
        </div>
    },
    {
        title: "The Man from the Train: The Solving of a Century-Old Serial Killer Mystery",
        author: "Bill James,  Rachel McCarthy James",
        finished: "",
        inProgress: false,
        "tags": [
            "non-fiction",
            "true crime",
        ],
        isFiction: false,
        genre: "true crime",
        goodreadsUrl: "https://www.goodreads.com/en/book/show/32919543-the-man-from-the-train",
        coverImg: "https://images.gr-assets.com/books/1505658828l/32919543.jpg",
        summary: <div>
            <p>
                Using unprecedented, dramatically compelling sleuthing techniques,
                legendary statistician and baseball writer Bill James applies his
                analytical acumen to crack an unsolved century-old mystery surrounding
                one of the deadliest serial killers in American history.
            </p>
            <p>
                Between 1898 and 1912, families across the country were bludgeoned
                in their sleep with the blunt side of an axe. Jewelry and valuables
                were left in plain sight, bodies were piled together, faces covered
                with cloth. Some of these cases, like the infamous Villasca, Iowa,
                murders, received national attention. But few people believed the
                crimes were related. And fewer still would realize that all of
                these families lived within walking distance to a train station.

            </p>
            <p>
                When celebrated baseball statistician and true crime expert Bill
                James first learned about these horrors, he began to investigate
                others that might fit the same pattern. Applying the same know-how
                he brings to his legendary baseball analysis, he empirically
                determined which crimes were committed by the same person. Then
                after sifting through thousands of local newspapers, court
                transcripts, and public records, he and his daughter Rachel
                made an astonishing discovery: they learned the true identity
                of this monstrous criminal. In turn, they uncovered one of
                the deadliest serial killers in America.
            </p>
            <p>
                Riveting and immersive, with writing as sharp as the cold side
                of an axe, <i>The Man from the Train</i> paints a vivid, psychologically
                perceptive portrait of America at the dawn of the twentieth
                century, when crime was regarded as a local problem, and
                opportunistic private detectives exploited a dysfunctional
                judicial system. James shows how these cultural factors enabled
                such an unspeakable series of crimes to occur, and his
                groundbreaking approach to true crime will convince skeptics,
                amaze aficionados, and change the way we view criminal history.
            </p>
        </div>
    },
    {
        title: "Death of Nine: The Dyatlov Pass Mystery",
        author: "Launton Anderson",
        finished: "",
        "tags": [
            "non-fiction",
            "true crime",
        ],
        isFiction: false,
        genre: "true crime",
        goodreadsUrl: "https://www.goodreads.com/book/show/43557667-death-of-nine",
        coverImg: "https://images.gr-assets.com/books/1547421413l/43557667.jpg",
        summary: <div>
            <p>
                Nine experienced winter hikers found dead. Crushed ribs and missing eyes are
                just a few of their horrific injuries. Their tent is found a mile away
                slashed and destroyed. What happened?
            </p>
            <p>
                <i>Death of Nine</i> guides you through that fateful night to unravel the
                clues and reveal the answer.
            </p>
            <p>
                From the radiation report to the autopsy profiles, <i>Death of Nine</i> explores
                all the clues, some old and some that have never been published before now.
            </p>
            <p>
                The Dyatlov Pass mystery is one of the most intriguing and perplexing
                mysteries in the world. These nine hikers died sixty years ago. Here,
                their true story is told. Their story, and the clues left behind, lead
                to one conclusion. <i>Death of Nine</i> explains that conclusion and is the
                key to solving the mystery of what really happened so long ago on that
                dark, cold winter night.
            </p>
        </div>
    },
    {
        title: "Org Design for Design Orgs",
        author: "Peter Merholz,  Kristin Skinner",
        finished: "",
        inProgress: false,
        "tags": [
            "non-fiction",
            "tech",
        ],
        isFiction: false,
        genre: "design",
        goodreadsUrl: "https://www.goodreads.com/book/show/27968897-org-design-for-design-orgs",
        coverImg: "https://images.gr-assets.com/books/1466989854l/27968897.jpg",
        summary:
            <div>
                <p>
                    Design has become the key link between users and today's complex and rapidly evolving digital experiences, and designers are starting to be included in strategic conversations about the products and services that enterprises ultimately deliver. This has led to companies building in-house digital/experience design teams at unprecedented rates, but many of them don't understand how to get the most out of their investment. This practical guide provides guidelines for creating and leading design teams within your organization, and explores ways to use design as part of broader strategic planning.
            </p>
                <div>
                    <p>
                        What you'll discover:
                </p>
                    <ul>
                        <li>
                            Why design's role has evolved in the digital age
                    </li>
                        <li>
                            How to infuse design into every product and service experience
                    </li>
                        <li>
                            The 12 qualities of effective design organizations
                    </li>
                        <li>
                            How to structure your design team through a Centralized Partnership
                    </li>
                        <li>
                            Design team roles and evolution
                    </li>
                        <li>
                            The process of recruiting and hiring designers
                    </li>
                        <li>
                            How to manage your design team and promote professional growth
                    </li>
                    </ul>
                </div>
            </div>
    },
    {
        title: "Info We Trust: How to Inspire the World with Data",
        author: "RJ Andrews",
        finished: "",
        inProgress: false,
        "tags": [
            "non-fiction",
            "design",
        ],
        isFiction: true,
        genre: "design",
        goodreadsUrl: "https://www.goodreads.com/book/show/39967323-info-we-trust",
        coverImg: "https://images.gr-assets.com/books/1528399699l/39967323.jpg",
        summary: <div>
            <p>
                How do we create new ways of looking at the world? Join award-winning
                data storyteller RJ Andrews as he pushes beyond the usual how-to, and
                takes you on an adventure into the rich art of informing.
            </p>
            <p>
                Creating <i>Info We Trust</i> is a craft that puts the world into forms
                that are strong and true. It begins with maps, diagrams, and charts --
                but must push further than dry defaults to be truly effective. How do
                we attract attention? How can we offer audiences valuable experiences
                worth their time? How can we help people access complexity?
            </p>
            <p>
                Dark and mysterious, but full of potential, data is the raw material
                from which new understanding can emerge. Become a hero of the information
                age as you learn how to dip into the chaos of data and emerge with new
                understanding that can entertain, improve, and inspire. Whether you call
                the craft data storytelling, data visualization, data journalism, dashboard
                design, or infographic creation -- what matters is that you are courageously
                confronting the chaos of it all in order to improve how people see the world.
                <i>Info We Trust</i> is written for everyone who straddles the domains of
                data and people: data visualization professionals, analysts, and all who
                are enthusiastic for seeing the world in new ways.
            </p>
            <p>
                This book draws from the entirety of human experience, quantitative and
                poetic. It teaches advanced techniques, such as visual metaphor and data
                transformations, in order to create more human presentations of data.
                It also shows how we can learn from print advertising, engineering,
                museum curation, and mythology archetypes. This human-centered approach
                works with machines to design information for people. Advance your
                understanding beyond by learning from a broad tradition of putting
                things "in formation" to create new and wonderful ways of opening
                our eyes to the world.
            </p>
            <p>
                <i>Info We Trust</i> takes a thoroughly original point of attack
                on the art of informing. It builds on decades of best practices
                and adds the creative enthusiasm of a world-class data storyteller.
                <i>Info We Trust</i> is lavishly illustrated with hundreds of
                original compositions designed to illuminate the craft, delight
                the reader, and inspire a generation of data storytellers.
            </p>
        </div>
    },
    {
        title: "The Paradox of Choice: Why More is Less",
        author: "Barry Schwartz",
        finished: "",
        inProgress: false,
        "tags": [
            "non-fiction",
            "psychology",
        ],
        isFiction: true,
        genre: "psychology",
        goodreadsUrl: "https://www.goodreads.com/book/show/10639.The_Paradox_of_Choice",
        coverImg: "https://images.gr-assets.com/books/1410138134l/10639.jpg",
        summary: <div>
            <p>
                In the spirit of Alvin Tofflers Future Shock,
                a social critique of our obsession with choice, and how it contributes
                to anxiety, dissatisfaction and regret. Whether we're buying a pair of
                jeans, ordering a cup of coffee, selecting a long-distance carrier,
                applying to college, choosing a doctor, or setting up a 401K, everyday
                decisions have become increasingly complex due to the overwhelming
                abundance of choice with which we are presented.
            </p>
            <p>
                In <i>The Paradox of Choice</i>, Barry Schwartz explains why too much of a good
                thing has proven detrimental to our psychological and emotional well-being.
                In accessible, engaging, and anecdotal prose, Schwartz explains how a
                culture that thrives on the availability of constantly evolving options
                can also foster profound dissatisfaction and self-blame in individuals,
                which can lead to a paralysis in decision making and, in some cases,
                depression. With the latest studies on how we make choices in our personal
                and professional lives, Schwartz offers practical advice on how to focus
                on the right choices, and how to derive greater satisfaction from choices
                that we do make.
            </p>
        </div>
    },
    {
        title: "The Outsider",
        author: "Stephen King",
        finished: "",
        inProgress: false,
        "tags": [
            "fiction",
            "horror",
        ],
        isFiction: true,
        genre: "horror",
        goodreadsUrl: "https://www.goodreads.com/book/show/36124936-the-outsider",
        coverImg: "https://images.gr-assets.com/books/1524596540l/36124936.jpg",
        summary: <div>
            <p>
                An unspeakable crime. A confounding investigation. At a time when
                the King brand has never been stronger, he has delivered one of his most unsettling and compulsively readable stories.
            </p>
            <p>
                An eleven-year-old boy’s violated corpse is found in a town park.
                Eyewitnesses and fingerprints point unmistakably to one of Flint
                City’s most popular citizens. He is Terry Maitland, Little League
                coach, English teacher, husband, and father of two girls. Detective
                Ralph Anderson, whose son Maitland once coached, orders a quick
                and very public arrest. Maitland has an alibi, but Anderson and
                the district attorney soon add DNA evidence to go with the fingerprints
                and witnesses. Their case seems ironclad.
            </p>
            <p>
                As the investigation expands and horrifying answers begin to emerge,
                King’s propulsive story kicks into high gear, generating strong
                tension and almost unbearable suspense. Terry Maitland seems like
                a nice guy, but is he wearing another face? When the answer comes,
                it will shock you as only Stephen King can.
            </p>
        </div>
    },
    {
        title: "Class Trip & The Mustache",
        author: "Emmanuel Carrere",
        finished: 2018,
        inProgress: false,
        "tags": [
            "fiction",
            "mystery",
        ],
        genre: "mystery",
        isFiction: true,
        goodreadsUrl: "https://www.goodreads.com/book/show/340240.Two_by_Carr_re",
        coverImg: "https://images.gr-assets.com/books/1388849971l/340240.jpg",
        summary: <div>
            <p>
                Two harrowing tales of pyschological suspense—hailed as " stunning"
                (John Updike)—from the mathematician of horror.
            </p>
            <p>
                Two by Carrere brings together the greatest works of Emmanuel Carrere,
                "the Stephen King of France" (Mirabella), two novels that are at once
                gripping suspense stories and laser probes into the modern psyche.
            </p>
            <p>
                The Mustache begins with a husband's playful question to his wife:
                "What would you say if I shaved off my mustache?" But, for the hero
                of The Mustache, that simple question catapults him into a metaphysical
                nightmare as his wife and friends not only fail to notice his newly
                clean-shaven appearance but deny the existence altogether of his
                former mustache. Is he the victim of some bad joke? Or have they
                all suddenly gone mad?
            </p>
            <p>
                In Class Trip, little Nicolas embarks on an ill-fated overnight
                excursion. Prone to lurid imaginings of kidnappings and organ
                thefts, Nicolas watches his fantasies grow horrifyingly real
                when a local child disappears. Nicolas takes it upon himself
                to investigate, fearlessly playing detective—until he uncovers
                the devastating truth. Dramatic, taut with intensity, Carrere's
                depictions of the terrifying anxieties and shifting realities of
                modern life are marvels of concentrated emotion.
            </p>
        </div>
    },
    {
        title: "Kitchen Confidential: Adventures in the Culinary Underbelly",
        author: "Anthony Bourdain",
        finished: 2018,
        audiobook: true,
        "tags": [
            "non-fiction",
            "memoir",
        ],
        genre: "memoir",
        isFiction: false,
        goodreadsUrl: "https://www.goodreads.com/book/show/33313.Kitchen_Confidential",
        coverImg: "https://images.gr-assets.com/books/1433739086l/33313.jpg",
        summary: <div>
            <p>
                A deliciously funny, delectably shocking banquet of wild-but-true tales of life
                in the culinary trade from Chef Anthony Bourdain, laying out his more than a
                quarter-century of drugs, sex, and haute cuisine—now with all-new,
                never-before-published material.
            </p>
            <p>
                New York Chef Tony Bourdain gives away secrets of the trade in his wickedly
                funny, inspiring memoir/expose. <i>Kitchen Confidential</i> reveals what Bourdain calls
                "twenty-five years of sex, drugs, bad behavior and haute cuisine."
            </p>
        </div>
    },
    // {
    //     title: "The Chickenshit Club: Why the Justice Department Fails to Prosecute Executives",
    //     author: "Jesse Eisinger",
    //     inProgress: true,
    //     audiobook: true,
    //     "tags": [
    //         "non-fiction",
    //         "true crime",
    //     ],
    //     genre: "true crime",
    //     isFiction: false,
    //     goodreadsUrl: "https://www.goodreads.com/book/show/34397551-the-chickenshit-club",
    //     coverImg: "https://images.gr-assets.com/books/1499862781l/34397551.jpg",
    //     summary: <div>
    //         <p>
    //             From Pulitzer Prize–winning journalist Jesse Eisinger, “a fast moving, fly-on-the-wall,
    //             disheartening look at the deterioration of the Justice Department and the Securities and
    //             Exchange Commission…It is a book of superheroes” (San Franscisco Review of Books).
    //         </p>
    //         <p>
    //             Why were no bankers put in prison after the financial crisis of 2008? Why do CEOs seem
    //             to commit wrongdoing with impunity? The problem goes beyond banks deemed “Too Big to
    //             Fail” to almost every large corporation in America—to pharmaceutical companies and auto
    //             manufacturers and beyond. <i>The Chickenshit Club</i>—an inside reference to prosecutors too
    //             scared of failure and too daunted by legal impediments to do their jobs—explains why
    //             in “an absorbing financial history, a monumental work of journalism… a first-rate study
    //             of the federal bureaucracy” (<i>Bloomberg Businessweek</i>).
    //         </p>
    //         <p>
    //             Jesse Eisigner begins the story in the 1970s, when the government pioneered the notion
    //             that top corporate executives, not just seedy crooks, could commit heinous crimes and
    //             go to prison. He brings us to trading desks on Wall Street, to corporate boardrooms and
    //             the offices of prosecutors and FBI agents. These revealing looks provide context for the
    //             evolution of the Justice Department’s approach to pursuing corporate criminals through
    //             the early 2000s and into the Justice Department’s approach to pursuing corporate criminals
    //             through the early 2000s and into the Justice Department of today, including the
    //             prosecutorial fiascos, corporate lobbying, trial losses, and culture shifts that have
    //             stripped the government of the will and ability to prosecute top corporate executives.
    //         </p>
    //     </div>
    // },
    {
        title: "The Indifferent Stars Above: The Harrowing Saga of a Donner Party Bride",
        author: "Daniel James Brown",
        inProgress: false,
        audiobook: true,
        "tags": [
            "non-fiction",
            "biography",
        ],
        genre: "biography",
        isFiction: false,
        goodreadsUrl: "https://www.goodreads.com/book/show/6033525-the-indifferent-stars-above",
        coverImg: "https://images.gr-assets.com/books/1438825353l/6033525.jpg",
        summary: <div>
            <p>
                In April of 1846, twenty-one-year-old Sarah Graves, intent on a better future, set
                 out west from Illinois with her new husband, her parents, and eight siblings.
                 Seven months later, after joining a party of emigrants led by George Donner,
                 they reached the Sierra Nevada Mountains as the first heavy snows of the season
                 closed the pass ahead of them. In early December, starving and desperate, Sarah
                 and fourteen others set out for California on snowshoes and, over the next
                 thirty-two days, endured almost unfathomable hardships and horrors.
            </p>
            <p>
                In this gripping narrative, Daniel James Brown sheds new light on one of the
                most infamous events in American history. Following every painful footstep of
                Sarah's journey with the Donner Party, Brown produces a tale both spellbinding
                and richly informative.
            </p>
        </div>
    },
    {
        title: "Pain Killer: An Empire of Deceit and the Origin of America's Opioid Epidemic",
        author: "Barry Meier",
        inProgress: false,
        audiobook: true,
        "tags": [
            "non-fiction",
            "medicine",
        ],
        genre: "medicine",
        isFiction: false,
        goodreadsUrl: "https://www.goodreads.com/book/show/1226104.Pain_Killer",
        coverImg: "https://images.gr-assets.com/books/1312051807l/1226104.jpg",
        summary: <div>
            <p>
                OxyContin, a potent painkiller containing opium-derived oxycodone as its key
                active ingredient, was first sold in 1996 as a treatment for cancer patients
                and other chronic pain sufferers. From the start, the drug's manufacturer
                aggressively marketed its patented time-release formula as a breakthrough in
                the effort to reduce prescription drug abuse. It wasn't long, however, before
                thrill-seeking teenagers shattered that illusion of safety; by simply crushing
                an "Oxy," they were able to tap into a high so seductive it would come to
                dominate their lives. Some patients, seeking relief from pain, also found
                themselves drawn to the drug's dark side.
            </p>
            <p>
                <i>Pain Killer</i> takes readers on a journey of discovery that begins with the true
                story of Lindsay, a high-school cheerleader in Virginia who gets hooked on Oxys,
                and expands outward to explore the critical issues of legitimate pain management,
                prescription drug abuse, and how the misuse of science by the drug industry
                threatens the public good. With the fast-rising abuse of prescription drugs by
                young people ringing alarm bells within government, the how and why behind the
                OxyContin disaster is a gripping read not only for parents, but also for medical
                professionals, community leaders, business executives, and all those concerned
                with this crisis.
            </p>
        </div>
    },
    {
        title: "The Stranger Beside Me",
        author: "Ann Rule",
        finished: 2018,
        "tags": [
            "non-fiction",
            "true crime",
        ],
        genre: "true crime",
        isFiction: false,
        goodreadsUrl: "https://www.goodreads.com/book/show/15654.The_Stranger_Beside_Me",
        coverImg: "https://images.gr-assets.com/books/1330072383l/15654.jpg",
        summary: <div>
            <p>
                Ann Rule was a writer working on the biggest story of her life, tracking
                down a brutal mass-murderer. Little did she know that Ted Bundy, her close
                friend, was the savage slayer she was hunting.
            </p>
        </div>
    },
    {
        title: "Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days",
        author: "Jake Knapp",
        finished: 2018,
        "tags": [
            "non-fiction",
            "technology",
        ],
        genre: "technology",
        isFiction: false,
        goodreadsUrl: "https://www.goodreads.com/book/show/25814544-sprint",
        coverImg: "https://images.gr-assets.com/books/1457284924l/25814544.jpg",
        summary: <div>
            <p>
                From three design partners at Google Ventures, a unique five-day process
                for solving tough problems using design, prototyping, and testing ideas
                with customers.
            </p>
            <p>
                The startups that Google Ventures invest in face big questions every day:
                Where’s the most important place to focus your effort, and how do you start?
                What will your ideas look like in real life? How many meetings and discussions
                does it take before you can be sure you have the right solution to a problem?
                Business owners and investors want their companies and the people who lead
                them to be equipped to answer these questions—and quickly. And now there’s
                a sure-fire way to solve their problems and test solutions: the sprint.
            </p>
            <p>
                While working at Google, designer Jake Knapp created a unique problem-solving
                method that he coined a “design sprint”—a five-day process to help companies
                answer crucial questions. His ‘sprints’ were used on everything from Google
                Search to Chrome to Google X. When he moved to Google Ventures, he joined
                Braden Kowitz and John Zeratsky, both designers and partners there who worked
                on products like YouTube and Gmail. Together Knapp, Zeratsky, and Kowitz have
                run over 100 sprints with their portfolio companies. They’ve seen firsthand
                how sprints can overcome challenges in all kinds of companies: healthcare,
                fitness, finance, retailers, and more.
            </p>
            <p>
                A practical guide to answering business questions, Sprint is a book for groups
                of any size, from small startups to Fortune 100s, from teachers to non-profits.
                It’s for anyone with a big opportunity, problem, or idea who needs to get
                answers today.
            </p>
        </div>
    },
    {
        title: "I'll Be Gone in the Dark",
        author: "Michelle McNamara",
        finished: 2018,
        audiobook: true,
        "tags": [
            "non-fiction",
            "true crime",
        ],
        genre: "true crime",
        isFiction: false,
        goodreadsUrl: "https://www.goodreads.com/book/show/35068432-i-ll-be-gone-in-the-dark",
        coverImg: "https://images.gr-assets.com/books/1499131009l/35068432.jpg",
        summary: <div>
            <p>
                A masterful true crime account of the Golden State Killer—the elusive
                serial rapist turned murderer who terrorized California for over a
                decade—from Michelle McNamara, the gifted journalist who died tragically
                while investigating the case.
            </p>
            <p>
                <i>"You’ll be silent forever, and I’ll be gone in the dark."</i>
            </p>
            <p>
                For more than ten years, a mysterious and violent predator committed
                fifty sexual assaults in Northern California before moving south,
                where he perpetrated ten sadistic murders. Then he disappeared,
                eluding capture by multiple police forces and some of the best detectives
                in the area.
            </p>
            <p>
                Three decades later, Michelle McNamara, a true crime journalist who
                created the popular website TrueCrimeDiary.com, was determined to
                find the violent psychopath she called "the Golden State Killer."
                Michelle pored over police reports, interviewed victims, and embedded
                herself in the online communities that were as obsessed with the case
                as she was.
            </p>
            <p>
                At the time of the crimes, the Golden State Killer was between the
                ages of eighteen and thirty, Caucasian, and athletic—capable of
                vaulting tall fences. He always wore a mask. After choosing a victim—he
                favored suburban couples—he often entered their home when no one was
                there, studying family pictures, mastering the layout. He attacked while
                they slept, using a flashlight to awaken and blind them. Though they
                could not recognize him, his victims recalled his voice: a guttural
                whisper through clenched teeth, abrupt and threatening.
            </p>
            <p>
                <i>I’ll Be Gone in the Dark</i>—the masterpiece McNamara was writing
                at the time of her sudden death—offers an atmospheric snapshot of a
                moment in American history and a chilling account of a criminal mastermind
                and the wreckage he left behind. It is also a portrait of a woman’s
                obsession and her unflagging pursuit of the truth. Framed by an introduction
                by Gillian Flynn and an afterword by her husband, Patton Oswalt, the book
                was completed by Michelle’s lead researcher and a close colleague.
                Utterly original and compelling, it is destined to become a true crime
                classic—and may at last unmask the Golden State Killer.
            </p>
        </div>
    },
    {
        title: "Bad Blood: Secrets and Lies in a Silicon Valley Startup",
        author: "John Carreyrou",
        finished: 2018,
        audiobook: true,
        "tags": [
            "non-fiction",
            "true crime",
        ],
        genre: "true crime",
        isFiction: false,
        goodreadsUrl: "https://www.goodreads.com/book/show/37976541-bad-blood",
        coverImg: "https://images.gr-assets.com/books/1525180824l/37976541.jpg",
        summary: <div>
            <p>
                The full inside story of the breathtaking rise and shocking collapse of Theranos,
                the multibillion-dollar biotech startup, by the prize-winning journalist who first
                broke the story and pursued it to the end, despite pressure from its charismatic
                CEO and threats by her lawyers.
            </p>
            <p>
                In 2014, Theranos founder and CEO Elizabeth Holmes was widely seen as the female
                Steve Jobs: a brilliant Stanford dropout whose startup "unicorn" promised to
                revolutionize the medical industry with a machine that would make blood testing
                significantly faster and easier. Backed by investors such as Larry Ellison and
                Tim Draper, Theranos sold shares in a fundraising round that valued the company
                at more than $9 billion, putting Holmes's worth at an estimated $4.7 billion.
                There was just one problem: The technology didn't work.
            </p>
            <p>
                A riveting story of the biggest corporate fraud since Enron, a tale of ambition
                and hubris set amid the bold promises of Silicon Valley.
            </p>
        </div>
    },
    {
        title: "Misery",
        author: "Stephen King",
        finished: 2018,
        "tags": [
            "fiction",
            "horror"
        ],
        genre: "horror",
        isFiction: true,
        goodreadsUrl: "https://www.goodreads.com/book/show/10614.Misery",
        coverImg: "https://images.gr-assets.com/books/1270545451l/10614.jpg",
        summary: <div>
            <p>
                Novelist Paul Sheldon has plans to make the difficult transition from writing
                historical romances featuring heroine Misery Chastain to publishing literary
                fiction. Annie Wilkes, Sheldon's number one fan, rescues the author from the
                scene of a car accident. The former nurse takes care of him in her remote house,
                but becomes irate when she discovers that the author has killed Misery off in
                his latest book. Annie keeps Sheldon prisoner while forcing him to write a book
                that brings Misery back to life.
            </p>
        </div>
    },
    {
        title: "The Stand",
        author: "Stephen King",
        finished: 2018,
        reread: true,
        "tags": [
            "fiction",
            "horror"
        ],
        genre: "horror",
        isFiction: true,
        goodreadsUrl: "https://www.goodreads.com/book/show/149267.The_Stand",
        coverImg: "https://images.gr-assets.com/books/1213131305l/149267.jpg",
        summary: <div>
            <p>
                This is the way the world ends: with a nanosecond of computer error in a
                Defense Department laboratory and a million casual contacts that form the
                links in a chain letter of death. And here is the bleak new world of the
                day after: a world stripped of its institutions and emptied of 99 percent
                of its people. A world in which a handful of panicky survivors choose
                sides — or are chosen.
            </p>
        </div>
    },
    {
        title: "Matilda",
        author: "Roald Dahl",
        finished: 2018,
        reread: true,
        "tags": [
            "fiction",
            "children's lit",
        ],
        genre: "children's lit",
        isFiction: true,
        goodreadsUrl: "https://www.goodreads.com/book/show/39988.Matilda",
        coverImg: "https://images.gr-assets.com/books/1388793265l/39988.jpg",
        summary: <div>
            <p>
                Matilda is a little girl who is far too good to be true. At age
                five-and-a-half she's knocking off double-digit multiplication
                problems and blitz-reading Dickens. Even more remarkably, her
                classmates love her even though she's a super-nerd and the
                teacher's pet. But everything is not perfect in Matilda's world.
                For starters she has two of the most idiotic, self-centered
                parents who ever lived. Then there's the large, busty nightmare
                of a school principal, Miss ("The") Trunchbull, a former
                hammer-throwing champion who flings children at will and
                is approximately as sympathetic as a bulldozer. Fortunately
                for Matilda, she has the inner resources to deal with such
                annoyances: astonishing intelligence, saintly patience, and
                an innate predilection for revenge.
            </p>
            <p>
                She warms up with some practical jokes aimed at her hapless parents,
                but the true test comes when she rallies in defense of her teacher,
                the sweet Miss Honey, against the diabolical Trunchbull. There is
                never any doubt that Matilda will carry the day. Even so, this
                wonderful story is far from predictable. Roald Dahl, while keeping
                the plot moving imaginatively, also has an unerring ear for emotional
                truth. The reader cares about Matilda because in addition to all her
                other gifts, she has real feelings.
            </p>
        </div>
    },
    {
        title: "Stranger With My Face",
        author: "Lois Duncan",
        finished: 2018,
        reread: true,
        "tags": [
            "fiction",
            "horror",
        ],
        genre: "horror",
        isFiction: true,
        goodreadsUrl: "https://www.goodreads.com/book/show/838768.Stranger_with_My_Face",
        coverImg: "https://images.gr-assets.com/books/1348021085l/838768.jpg",
        summary: <div>
            <p>
                Laurie was at home, but her boyfriend swears he saw her on the beach
                with another guy. Her family insists they see her coming and going
                when she's been out of the house for hours. Who—or what—is taking
                over Laurie's life?
            </p>
        </div>
    },
    {
        title: "Before the Fall",
        author: "Noah Hawley",
        finished: 2018,
        "tags": [
            "fiction",
            "mystery"
        ],
        genre: "mystery",
        isFiction: true,
        goodreadsUrl: "https://www.goodreads.com/book/show/40670008-before-the-fall",
        coverImg: "https://images.gr-assets.com/books/1530290179l/40670008.jpg",
        summary: <div>
            <p>
                From the Emmy, PEN, Peabody, Critics' Choice, and Golden Globe
                Award-winning creator of the TV show Fargo comes the thriller
                of the year.
            </p>
            <p>
                On a foggy summer night, 11 people - 10 privileged, one down-on-his-luck
                painter - depart Martha's Vineyard on a private jet headed for New
                York. Sixteen minutes later the unthinkable happens: The plane plunges
                into the ocean. The only survivors are Scott Burroughs - the painter -
                and a four-year-old boy who is now the last remaining member of an
                immensely wealthy and powerful media mogul's family.
            </p>
            <p>
                With chapters weaving between the aftermath of the crash and the
                backstories of the passengers and crew members - including a Wall
                Street titan and his wife, a Texan-born party boy just in from
                London, a young woman questioning her path in life, and a career
                pilot - the mystery surrounding the tragedy heightens. As the
                passengers' intrigues unravel, odd coincidences point to a
                conspiracy. Was it merely by dumb chance that so many influential
                people perished? Or was something far more sinister at work?
                Events soon threaten to spiral out of control in an escalating
                storm of media outrage and accusations. And while Scott struggles
                to cope with fame that borders on notoriety, the authorities
                scramble to salvage the truth from the wreckage.
            </p>
            <p>
                Amid pulse-quickening suspense, the fragile relationship between
                Scott and the young boy glows at the heart of this stunning novel,
                raising questions of fate, human nature, and the inextricable ties
                that bind us together.
            </p>
        </div>
    },
    {
        title: "Altered Carbon",
        author: "Richard Morgan",
        finished: 2018,
        "tags": [
            "fiction",
            "sci-fi",
        ],
        genre: "sci-fi",
        isFiction: true,
        goodreadsUrl: "https://www.goodreads.com/book/show/40792913-altered-carbon",
        coverImg: "https://images.gr-assets.com/books/1531415180l/40792913.jpg",
        summary: <div>
            <p>
                Four hundred years from now mankind is strung out across a region of
                interstellar space inherited from an ancient civilization discovered
                on Mars. The colonies are linked together by the occasional sublight
                colony ship voyages and hyperspatial data-casting. Human consciousness
                is digitally freighted between the stars and downloaded into bodies as
                a matter of course.
            </p>
            <p>
                But some things never change. So when ex-envoy, now-convict Takeshi
                Kovacs has his consciousness and skills downloaded into the body of
                a nicotine-addicted ex-thug and presented with a catch-22 offer, he
                really shouldn't be surprised. Contracted by a billionaire to discover
                who murdered his last body, Kovacs is drawn into a terrifying conspiracy
                that stretches across known space and to the very top of society.
            </p>
        </div>
    },
    {
        title: "Interactive Data Visualization for the Web: An Introduction to Designing with D3",
        author: "Scott Murray",
        finished: 2018,
        "tags": [
            "non-fiction",
            "technology",
        ],
        genre: "technology",
        isFiction: false,
        goodreadsUrl: "https://www.goodreads.com/book/show/16087610-interactive-data-visualization-for-the-web",
        coverImg: "https://images.gr-assets.com/books/1350959444l/16087610.jpg",
        summary: <div>
            <p>
                Create and publish your own interactive data visualization projects
                on the Web—even if you have little or no experience with data
                visualization or web development. It’s easy and fun with this
                practical, hands-on introduction. Author Scott Murray teaches
                you the fundamental concepts and methods of D3, a JavaScript
                library that lets you express data visually in a web browser.
                Along the way, you’ll expand your web programming skills,
                using tools such as HTML and JavaScript.
            </p>
            <p>
                This step-by-step guide is ideal whether you’re a designer or
                visual artist with no programming experience, a reporter
                exploring the new frontier of data journalism, or anyone
                who wants to visualize and share data.
            </p>
            <ul>
                <li>
                    Learn HTML, CSS, JavaScript, and SVG basics
                </li>
                <li>
                    Dynamically generate web page elements from your data—and
                    choose visual encoding rules to style them
                </li>
                <li>
                    Create bar charts, scatter plots, pie charts, stacked bar
                    charts, and force-directed layouts
                </li>
                <li>
                    Use smooth, animated transitions to show changes in your data
                </li>
                <li>
                    Introduce interactivity to help users explore data through
                    different views
                </li>
                <li>
                    Explore hands-on with downloadable code and over 100 examples
                </li>
            </ul>
        </div>
    },
    {
        title: "Trapped (Fear Street #51)",
        author: "R. L. Stine",
        finished: 2018,
        reread: true,
        "tags": [
            "fiction",
            "horror",
        ],
        genre: "horror",
        isFiction: false,
        goodreadsUrl: "https://www.goodreads.com/book/show/176552.Trapped",
        coverImg: "https://images.gr-assets.com/books/1387662990l/176552.jpg",
        summary: <div>
            <p>
                Some kids in the sixties used to party in the tunnels under
                Shadyside High, until something left a bunch of people dead.
                But that's just a story, right? Besides, exploring the tunnels
                is more fun than being stuck in Saturday detention. Too bad
                there's no turning back—because in the tunnels there's no one
                around to hear your screams.
            </p>
        </div>
    },
];

export default books;