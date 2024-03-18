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
    summary: `Experienced engineer and technical leader with proven credentials in the design and delivery of end-to-end
multitiered data products at scale. Hands-on expertise at all stages of the technical/data product life cycles, including data
analysis, modelling and algorithms, data architecture/systems design and deployment.
Track record of successful product delivery, ensuring software engineering best practices in a cross-functional environment.
Track record in building and leading high-performing Web, ML and Data engineering teams,
with a focus on excellent stakeholder management, clear communication, mentorship and team development.`,
    // "With 1 year of experience as a Solutions Architect, and 7 years in AI and NLP, I build transformative digital solutions for my customers.",
    // "With 2 years of experience as an Engineering Leader, and 7 years in AI and NLP, I build high-performing and transformative engineering teams.",
    // "Having previously built the modern data stack of OneFootball as well as built a 4-people analytics team for OneFootball Labs, I bring 7 years of experience in AI and NLP to build transformative digital solutions for my customers.",
    url: "https://guitton.co/",
    website: "https://guitton.co/",
  },
  certificates: [
    {
      name: "Enterprise Design Thinking Practitioner",
      date: "Mar 2024",
      url: "https://www.credly.com/earner/earned/badge/09c441c8-52ac-48c8-b24e-34a27c284481",
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
        "'When Natural Language Processing meets Football' at Unstructured meetup by Tilores, Mar 2022",
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
        "Google Cloud Platform",
        "Microsoft Azure",
        "Amazon Web Services",
        "Serverless",
        "Microservices",
        "MLOps",
        "DataOps",
        "Docker/Kubernetes",
        "AirFlow",
      ],
    },
    {
      name: "Data Development",
      keywords: [
        "PostgresSQL",
        "ElasticSearch",
        "Redis",
        "Redshift",
        "Snowflake",
        "Neo4j",
        "Snowplow",
        "Spark",
        "dbt",
      ],
    },
    {
      name: "Full stack Development",
      keywords: [
        "python",
        "Natural Language Processing",
        "FastAPI",
        "scikit-learn",
        "SpaCy",
        "networkX",
        "PyTorch",
        "Transformers",
        "Hugging Face",
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
        "Technical Project Management",
        "Delivery Roadmaps",
        "Financial Budgets",
        "Stakeholder Management",
        "Delivery Reporting",
        "Objectives and Key Results",
      ],
    },
  ],
  volunteer: [],
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
        "Data and AI consultation services for multiple short-term, high velocity projects including:",
      // Design and build transformative digital solutions aligned with customer's requirements",
      highlights: [
        "Web chatbot assistant leveraging retrieval-augmented generation for machine maintenance",
        "Tech and Product strategy involving Computer Vision and IoT data for precision livestock farming",
        "Design and delivery of a B2B SaaS prospecting tool for solar carports installers using geospatial computing (<a href='https://www.youtube.com/watch?v=FWtXAqEPao0'>video</a>)",
        "Design of a digital twin architecture for solar carports and EV chargers",
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
        `Technical leadership, vision and strategy to design and build robust and scalable ecommerce marketplace and NFT
platform, including smart contracts, minting and packing, full-stack web application, tracking and data analytics (<a href='https://www.youtube.com/watch?v=QXkFb7BUwh0'>video</a>)`,
        `Established the Web3 business unit, 
        defined the team structure for Product, Design, Engineering and Data,
        identified and organised collaboration processes with the Go-to-Market teams`,
        `Hired and Managed a cross-capability team of 20 colleagues:
        conducted hiring interviews, provided leadership and coaching through 1-on-1s, and identified personal development plans;
         managed resourcing demands, delivery timelines and incidents; developed technology roadmaps; gave trainings on <a href='https://www.youtube.com/watch?v=A-XM22C2E2I'>blockchain firefighting</a> or <a href='https://www.youtube.com/watch?v=H_qXFZmBn2o'>technical SEO</a>`,
        `Accountable for product strategy, delivery and performance (115k MAUs) and business results ($500k revenue)`,
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
        `Technical lead for design, development and delivery of automated <b>news tagging</b> solution,
        ultimately enabling the company to scale its news coverage to 12 languages, 5000 articles per day and 15 million MAUs.
        Used knowledge graphs, language models, text classification, entity linking, topic modeling and search.`,
        `Technical lead for <b>Data Engineering</b> and <b>Analytics Engineering</b>. Migration to a modern data stack, roll out of airflow, dbt, AWS LakeFormation, Snowplow.
        Refactoring code, architecture design, code reviews, and mentoring.`,
        `Led cross-team project to build recommenders systems for news and entity content, which increased user engagement.`,
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
      summary: `Joined the world-wide deep-tech incubator investing in early-career co-founders.
        Applied deep learning CNN models to a scalable hiring personality screening tool for talent acquisition managers.`,
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
      summary:
        "Joined a deep-tech Esports startup. Trained deep learning MLP models for generating in-game recommendations and betting odds.",
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
              "Joined a Data Science Consultancy to measure online earned media for Automotive and Cosmetics brands using NLP and web crawlers.",
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
