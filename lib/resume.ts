import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { JsonResume } from "../app/(routes)/resume/components/jsonresume/types";

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
const includeLanguages = true;
const includeInternships = true;
export const resume: JsonResume = {
  $schema:
    "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
  awards: [],
  basics: {
    email: "admin@guitton.co",
    image: "/images/louis.jpg",
    label: "Freelance Solutions Architect",
    // label: "Engineering and Data Leader",
    // label: "Freelance Solutions and Data Architect",
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
    summary:
      "With 1 year of experience as a Solutions Architect, and 7 years in AI and NLP, I build transformative digital solutions for my customers.",
    // "With 2 years of experience as an Engineering Leader, and 7 years in AI and NLP, I build high-performing and transformative engineering teams.",
    // "Having previously built the modern data stack of OneFootball as well as built a 4-people analytics team for OneFootball Labs, I bring 7 years of experience in AI and NLP to build transformative digital solutions for my customers.",
    url: "https://guitton.co/",
    website: "https://guitton.co/",
  },
  certificates: [],
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
      entity: "guitton.co",
      name: "Blogging and Freelance",
      url: "https://guitton.co",
      summary:
        "Freelance Solutions Architect in the Sustainability and AI space. Sharing my thougts with ~1k MAUs.",
      highlights: [
        "Ranking on the first page of Google for <a href='https://guitton.co/posts/fastapi-monitoring'><i>fastapi monitoring</i></a> and <a href='https://guitton.co/posts/dbt-artifacts'><i>amundsen dbt</i></a> since 2020",
        "NLP and Graph RAG with Generative AI with <a href='https://guitton.co/posts/graphs-and-language'>Graphs and Language</a>",
        "Past clients include IFP Energies Nouvelles, a leading European player in the fields of energy, and the environment. <a href='https://guitton.co/process'>Freelance Process</a>",
      ],
    },
  ],
  publications: [],
  references: [],
  skills: [
    {
      keywords: [
        "python",
        "Postgres",
        "Redis",
        "terraform",
        "Kubernetes",
        "Typesense",
      ],
      name: "Backend",
    },
    {
      keywords: [
        "transformers",
        "llama-index",
        "spaCy",
        "networkX",
        "pytextrank",
        "ElasticSearch",
      ],
      name: "NLP",
    },
    {
      keywords: ["mlflow", "bentoML", "argilla", "SageMaker"],
      name: "MLOps",
    },
    {
      keywords: ["airflow", "SQL", "dbt", "spark", "Snowplow", "Redshift"],
      name: "Data Engineering",
    },
    {
      keywords: ["TypeScript", "NextJS", "TailwindCSS"],
      name: "MVP Building",
    },
  ],
  volunteer: [],
  work: [
    {
      highlights: [
        "Pursuing open source projects and applied research in the space of Graphs and NLP <a href='https://www.youtube.com/watch?v=r9bjhkaNg5M&list=PLNodHTYsaGbLagG53yvtuQ0OfoaB2upvi&index=1'>recent talk at a conference</a>",
        "Computer Vision and IoT data platform for Precision Livestock Farming (AgriTech)",
        "GIS and B2B SaaS prospecting tool for commercial solar carports installers (CleanTech) <a href='https://www.youtube.com/watch?v=FWtXAqEPao0'>video</a>",
        "Digital twin protoype for Solar carports using Fronius, Grafana, Modbus, Webdyn, Sparklin, OCPP (CleanTech)",
        //     'Data Solutions, teaching and open source',
        //     '<b>Data Solutions</b>: Built data stack for entrepreneurship NGO and fintech startup. Deliver <i>airflow</i> workshop for automotive digital lab.',
        //     '<b>Teaching</b>: Built and taught ML and IoT classes for engineering MBA in Paris.',
        //     '<b>Open Source</b>: Contribute to <i>pytextrank</i> and <i>kglab</i> of Paco Nathan. Contribute to <i>Apache Airflow</i>.',
      ],
      location: {
        city: "Berlin",
        countryCode: "DE",
      },
      name: "Self-employed",
      position: "Freelance Solutions Architect",
      startDate: "2023-04-03",
      // endDate: "2023",
      summary:
        "Design and build transformative digital solutions aligned with customer's requirements",
      url: "https://guitton.co/",
    },
    {
      highlights: [
        "Co-founded a joint venture between OneFootball and Animoca Brands on a new strategic opportunity",
        "Lead the company through steep headcount growth from 2 people to 45 over 12 months",
        "Hired and <b>built 2 high-performing engineering teams</b> over 3 months, managed 4 eng teams at peak",
        // UX engineering team, Data team, Blockchain engineering team, Martech team
        // • Accountable for staffing and personnel planning (incl. recruiting)
        // managed and grown high-performing teams by focusing on the engineers.
        // building teams that focus on impact, technical excellence, and transparency
        "<b>Architected the tech stack</b> and built blockchain MVP including smart contract, frontend, and backend; <a href='https://www.youtube.com/watch?v=QXkFb7BUwh0'>video</a>",
        // delivered MVP 1 month before FIFA competitor
        // 20k MAUs, 115k at peak 21-27 Aug
        // 500k total revenue
        "Accountable for product strategy, delivery and performance (115k MAUs peak) and business results ($500k revenue)",
        // • Managing cross department dependencies
        "Provided leadership and coaching; gave trainings on <a href='https://www.youtube.com/watch?v=A-XM22C2E2I'>blockchain firefighting</a> or <a href='https://www.youtube.com/watch?v=H_qXFZmBn2o'>technical SEO</a>",
      ],
      location: {
        city: "Berlin",
        countryCode: "DE",
      },
      name: "OneFootball Labs",
      position: "VP of Engineering and co-founder",
      startDate: "2022-01-31",
      endDate: "2023-03-31",
      summary:
        "NFT marketplace for football video collectibles minted and dropped in-house",
      url: "https://aera.onefootball.com/",
    },
    {
      highlights: [
        "Set the technical bar for <b>Data Science, Data Engineering, and Data Analytics</b>.",
        "Designed and implemented advanced human-in-the-loop <b>Natural Language Processing (NLP)</b> systems for news tagging in 7 languages.",
        "Used knowledge graphs, language models, text classification, entity linking, topic modeling and search.",
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
      endDate: "2018-06-30",
      highlights: [
        // scalable hiring personality screening competitor to HireView
        // Worked with Isabelle Guyon's research group
        "<b>Entrepreneurship</b>: Developed an idea using CNNs on video, pitched in front of angel investors.",
      ],
      location: {
        city: "Berlin",
        countryCode: "DE",
      },
      name: "Entrepreneur First",
      position: "Entrepreneur in residence",
      startDate: "2018-04-30",
      summary:
        "World-wide deep-tech incubator investing in early-career co-founders.",
      url: "https://www.joinef.com/",
    },
    {
      endDate: "2018-03-31",
      highlights: [
        "<b>Deep Learning & Big Data</b>: Trained MLP models in tensorflow and theano applied to recsys and bettings odds models.",
      ],
      location: {
        city: "Berlin",
        countryCode: "DE",
      },
      name: "DOJO Madness",
      position: "Data Scientist",
      startDate: "2016-08-31",
      summary:
        "ESports startup selling analytics and coaching tools to gamers.",
      url: "https://www.bayesholding.com/",
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
              "Measuring online earned media for Automotive and Cosmetics brands using NLP and web crawlers.",
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
              "Software development within the Digital Innovation team of R&D UK centre of an energy leader.",
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
              "Data mining for photovoltaics energy storage optimisation within the Power Electronics R&D team.",
            url: "https://www.bosch.com.sg/our-company/bosch-in-singapore/bishan/",
          },
        ]
      : []
  ),
};
