import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { JsonResume } from "../app/(routes)/resume/components/jsonresume/types";

// copy to https://app.standardresume.co/resumes/r6V5I1YFIhYoOL5BWvnYr/write

/**
 * ref: https://huyenchip.com/2023/01/24/what-we-look-for-in-a-candidate.html
 * Ref: https://leerob.io/blog/resume
 *
 * - Omit unnecessary information (GPA, projects, internships, phone number).
 * - keep clear start and end dates for experience
 * - keep skill section, great for ATS
 * - add clear metrics to bullet points in experience
 * - keep it 1 page
 * - keep about section short, leave the rest on linkedin or website
 */
const includeLanguages = false;
const includeInternships = true;
export const resume: JsonResume = {
  $schema:
    "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
  awards: [],
  basics: {
    email: "admin@guitton.co",
    image: "/images/louis.jpg",
    label: "Solutions Architect, ML Engineer & Engineering Lead",
    location: {
      city: "Berlin",
      countryCode: "DE",
    },
    name: "Louis Guitton",
    profiles: [
      {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/louisguitton/",
        username: "louisguitton",
      },
      {
        icon: faGithub,
        url: "https://github.com/louisguitton",
        username: "louisguitton",
      },
    ],
    summary: `
    Engineering and technical leader who provides strategic guidance while motivating teams to excellence.
    Louis knows how to successfully innovate, build, launch, scale and maintain multi-tiered data products.
    `,
    // summary: `Experienced engineer and technical leader with proven credentials in the design and delivery of end-to-end
    // multitiered data products at scale. Hands-on expertise at all stages of the technical/data product life cycles, including data
    // analysis, modelling and algorithms, data architecture/systems design and deployment.
    // Track record of successful product delivery, ensuring software engineering best practices in a cross-functional environment.
    // Track record in building and leading high-performing Web, ML and Data engineering teams,
    // with a focus on excellent stakeholder management, clear communication, mentorship and team development.`,
    // "With 1 year of experience as a Solutions Architect, and 7 years in AI and NLP, I build transformative digital solutions for my customers.",
    // "With 2 years of experience as an Engineering Leader, and 7 years in AI and NLP, I build high-performing and transformative engineering teams.",
    // "Having previously built the modern data stack of OneFootball as well as built a 4-people analytics team for OneFootball Labs, I bring 7 years of experience in AI and NLP to build transformative digital solutions for my customers.",
    url: "https://guitton.co/",
    website: "https://guitton.co/",
  },
  certificates: [
    {
      name: "Enterprise Design Thinking Co-Creator",
      date: "Mar 2024",
      url: "https://www.credly.com/badges/4335532b-023d-4506-8033-af5f054d8ce0",
      issuer: "IBM",
    },
    {
      name: "Natural Language Processing Specialization",
      date: "Oct 2020",
      url: "https://www.coursera.org/account/accomplishments/specialization/VV58EVYSVZJ3",
      issuer: "DeepLearning.AI (Coursera)",
    },
    {
      name: "Supervised Machine Learning",
      date: "Mar 2016",
      url: "https://www.coursera.org/account/accomplishments/verify/S2967XDV68D6",
      issuer: "DeepLearning.AI (Coursera)",
    },
  ],
  education: [
    {
      area: "Executive Engineering",
      courses: [
        "Machine Learning",
        "Big data",
        "Econometrics",
        "Mechatronics",
        "Energy",
      ],
      endDate: "2016-12-31",
      institution: "MINES ParisTech PSL",
      location: {
        city: "Paris",
        countryCode: "FR",
      },
      startDate: "2012-12-31",
      studyType: "MSc",
      url: "https://mines-paristech.eu/",
    },
  ],
  interests: [],
  languages: includeLanguages
    ? [
        {
          fluency: "Native Speaker",
          language: "French",
        },
        {
          fluency: "Fluent",
          language: "English",
        },
        {
          fluency: "Basic",
          language: "German",
        },
      ]
    : [],
  meta: {
    canonical:
      "https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json",
    lastModified: "2017-12-24T15:53:00",
    version: "v1.0.0",
  },
  projects: [
    {
      name: "Speaking engagements",
      highlights: [
        "'Graphs and Language' lightning talk at MLOps.community AI in Production conference, Feb 2024",
        "'When Natural Language Processing meets Football' at Unstructured Data meetup, Mar 2022",
        "'Graph Data Science' at The Knowledge Graph Conference, May 2021",
      ],
      summary: "Public speaking, verbal communication and knowledge sharing",
    },
    {
      entity: "guitton.co",
      name: "Blogging",
      url: "https://guitton.co",
      summary: "Written communication, and knowledge sharing with ~1k MAUs.",
      highlights: [
        "Ranking on the first page of Google for <a href='https://guitton.co/posts/fastapi-monitoring'><i>fastapi monitoring</i></a> and <a href='https://guitton.co/posts/dbt-artifacts'><i>amundsen dbt</i></a> since 2020",
        "NLP, LLMs and Graph RAG with <a href='https://guitton.co/posts/graphs-and-language'>Graphs and Language</a>",
      ],
    },
    {
      name: "Mentoring",
      summary:
        "Code review, blog post review, and career advice for junior engineers and data professionals",
      highlights: [
        "Coached Analytics Engineer to successful completion of <a href='https://medium.com/@marielestavel/how-i-have-set-up-a-cost-effective-modern-data-stack-for-a-charity-3fe7e7c9162'>Data for Good project</a> in May 2022",
      ],
    },
  ],
  publications: [],
  references: [],
  skills: [
    {
      name: "Architecture",
      keywords: [
        "System Design",
        "Data Pipelines",
        // "Google Cloud Platform",
        // "Microsoft Azure",
        "Amazon Web Services",
        "Serverless",
        "Microservices",
        "MLOps",
        "DataOps",
        "Docker",
        "Kubernetes",
        "AirFlow",
      ],
    },
    {
      name: "Data Development",
      keywords: [
        "Pandas",
        "DuckDB",
        "dbt",
        "Redshift",
        "Snowflake",
        // "Polars",
        "Spark",
        "Kafka",
        "AWS Glue",
        "AWS LakeFormation",
        "PostgresSQL",
        "ElasticSearch",
        "Redis",
        "Neo4j",
        "Snowplow",
      ],
    },
    {
      name: "Full stack Development",
      keywords: [
        "python",
        "FastAPI",
        "Natural Language Processing",
        "scikit-learn",
        "SpaCy",
        "networkX",
        "PyTorch",
        "Hugging Face",
        "transformers",
        "MLFlow",
        "argilla",
        "langchain",
        "llama-index",
        "TypeScript",
        "NextJS",
        "TailwindCSS",
      ],
    },
    {
      name: "Delivery",
      keywords: [
        "Agile",
        "Scrum",
        "Technical Project Management",
        "Delivery Roadmaps",
        "Design Thinking",
        // "Financial Budgets",
        "Stakeholder Management",
        "Objectives and Key Results",
      ],
    },
  ],
  volunteer: [],
  // {action verb} {deliverable/achievement} {impact (quantifiable if possible}} {tech used (if applicable)}
  // in 2 lines
  work: [
    {
      name: "Self-employed",
      location: {
        city: "Berlin",
        countryCode: "DE",
      },
      position: "Freelance Solutions Architect",
      url: "https://guitton.co/",
      startDate: "2023-04-03",
      // endDate: "2023",
      summary:
        "Data and AI consultation services for multiple short-term, high-velocity projects including:",
      highlights: [
        // {action verb} {deliverable/achievement} {impact (quantifiable if possible}} {tech used (if applicable)}
        // in 2 lines
        "Built reference architecture for AI chatbot, using RAG and LLMs, unlocking my client's new product vision",
        "Delivered user-centred technical strategy for Agriculture 4.0 and precision livestock farming, helping my client secure funding from Bpifrance",
        "Delivered a prospecting tool for a leading French solar carport installer, using geospatial computing (<a href='https://www.youtube.com/watch?v=FWtXAqEPao0'>details</a>), speeding up the sales process",
        "Built digital twin architecture for solar carports and EV chargers, making real-time monitoring and smart charging possible",
        // "Write material and teach ML and IoT classes for engineering MBA in Paris",
        // "Design and deliver <i>airflow</i> workshop for automotive digital lab",
        // "Contribute to open source projects like <i>pytextrank</i>",
      ],
    },
    {
      location: {
        city: "Berlin",
        countryCode: "DE",
      },
      name: "OneFootball Labs",
      position: "VP of Engineering",
      startDate: "2022-01-31",
      endDate: "2023-03-31",
      summary: "NFT platform and marketplace for football video collectibles",
      highlights: [
        // {action verb} {deliverable/achievement} {impact (quantifiable if possible}} {tech used (if applicable)}
        // in 2 lines
        `Managed 4 remote and hybrid teams for engineering, data, product and design of 20 staff`,
        `Delivered robust and scalable e-commerce NFT marketplace, including smart contracts, minting and packing (<a href='https://www.youtube.com/watch?v=QXkFb7BUwh0'>video</a>)
        enabling the business to execute on a new strategic opportunity in a highly technical space`,
        `Found product-market fit for NFT marketplace, leading to $500k revenue and 115k MAUs`,
        `Established the Web3 business unit of OneFootball and defined the structure of teams and processes, bringing solutions in a fast-paced environment`,
        `Hired and coached talent, built a culture of excellence and transparency, and gave training on <a href='https://www.youtube.com/watch?v=A-XM22C2E2I'>blockchain firefighting</a> or <a href='https://www.youtube.com/watch?v=H_qXFZmBn2o'>technical SEO</a>`,
        // conducted hiring interviews, provided leadership and coaching through 1-on-1s, and identified personal development plans;
        //  managed resourcing demands, delivery timelines and incidents; developed technology roadmaps;
        // UX engineering team, Data team, Blockchain engineering team, Martech team
        // • Accountable for staffing and personnel planning (incl. recruiting)
        // managed and grown high-performing teams by focusing on the engineers.
        // building teams that focus on impact, technical excellence, and transparency
        // delivered MVP 1 month before FIFA competitor
        // 20k MAUs, 115k at peak 21-27 Aug
        // 500k total revenue
        // • Managing cross department dependencies
      ],
      url: "https://aera.onefootball.com/",
    },
    {
      highlights: [
        // {action verb} {deliverable/achievement} {impact (quantifiable if possible}} {tech used (if applicable)}
        // in 2 lines
        `Delivered innovative <b>news tagging</b> solution using NLP, enabling the company to scale its news coverage to 12 languages, 5000 articles per day`,
        `Built the company's first knowledge graph, unlocking new entity types like Players and Games, and enabling new high-engagement features like <b>news recommendations</b>`,
        `Migrated the company's data stack to a modern data stack, including airflow, dbt, AWS LakeFormation, Snowplow, enabling the company to scale its data processing and analytics`,
        `Mentored and coached 2 engineers and 4 analysts, enabling them to grow their skills and take on more responsibilities`,
        // `Led cross-team project to build recommenders systems for news and entity content, which increased user engagement.`,
        // "Hired, managed and growed one MLE intern.",
        // '<b>News tagging</b>: Researched, designed, built and deployed a custom human-in-the-loop entity linking service for tagging football news in 7 languages. Final solution makes use of <i>referent graphs</i>. Applied other NLP techniques like language models, NER, text classification, topic modeling. I favour data-centric ML over model-centric.',
        // '<b>Recommenders systems</b>: Built recommender systems PoCs using both custom and off-the-shelf algorithms.',
        // '<b>First Data Science hire</b>: Defined the Data Science project plan and the MLOps stack. Built quick wins like <i>prophet</i> forecasting or <i>XGBoost</i> classification for tabular data or templated news generation slackbot.',
        // '<b>Data Consumption</b>: [for humans] introduced <i>Metabase</i>. [for machines] built blueprints for programmatic data consumption using APIs, emails, slackbots, Redshift Data API, Redis or S3 unloads.',
        // "<b>Data Engineering</b>: Refactored parts of OneFootball's analytics stack: roll out <i>airflow</i> for scheduling and ingestion, roll out <i>dbt</i> for data modeling on the Amazon Redshift Data Warehouse. Architecture design and code reviews.",
      ],
      location: {
        city: "Berlin",
        countryCode: "DE",
      },
      name: "OneFootball",
      position: "Principal Machine Learning Engineer",
      startDate: "2018-10-31",
      endDate: "2022-01-31",
      summary:
        "Football media platform serving 15 million MAUs with news, OTT streaming, DFS and NFTs in 12 languages.",
      url: "https://onefootball.com/",
    },
    {
      name: "Entrepreneur First",
      location: {
        city: "Berlin",
        countryCode: "DE",
      },
      position: "Entrepreneur in Residence",
      url: "https://www.joinef.com/",
      startDate: "2018-04-30",
      endDate: "2018-06-30",
      // Worked with Isabelle Guyon's research group
      // scalable hiring personality screening competitor to HireView
      summary: `Developed a scalable personality screening tool for talent acquisition managers using 
      deep learning Computer Vision and the resources of a worldwide deep-tech incubator for early-career founders.`,
      highlights: [],
    },
    {
      name: "DOJO Madness",
      location: {
        city: "Berlin",
        countryCode: "DE",
      },
      position: "Data Scientist",
      url: "https://www.bayesholding.com/",
      startDate: "2016-08-31",
      endDate: "2018-03-31",
      summary: `Built and maintained a real-time deep-learning recommendations pipeline for 1 million daily users of a mobile app using Spark on AWS EMR and tensorflow.`,
      highlights: [],
    },
  ].concat(
    includeInternships
      ? [
          {
            endDate: "2016-06-30",
            highlights: [],
            location: {
              city: "Paris",
              countryCode: "FR",
            },
            name: "Ekimetrics",
            position: "Data Science Intern",
            startDate: "2016-01-31",
            summary:
              "Researched applications of NLP and web crawlers to the econometrics of online earned media for Automotive and Cosmetics brands.",
            url: "https://ekimetrics.com/",
          },
          {
            endDate: "2015-09-30",
            highlights: [],
            location: {
              city: "Brighton",
              countryCode: "UK",
            },
            name: "EDF Energy",
            position: "R&D Engineer Intern",
            startDate: "2015-02-28",
            summary:
              "Researched applications of software development and data science to the digital innovation of an energy leader.",
            url: "https://www.edfenergy.com/about/research-development",
          },
          {
            endDate: "2014-12-31",
            highlights: [],
            location: {
              city: "Singapore",
              countryCode: "SG",
            },
            name: "Bosch Southeast Asia",
            position: "R&D Engineer Intern",
            startDate: "2014-06-30",
            summary:
              "Researched applications of Data Science to storage optimisation of photovoltaics energy within the Power Electronics R&D team.",
            url: "https://www.bosch.com.sg/our-company/bosch-in-singapore/bishan/",
          },
        ]
      : []
  ),
};
