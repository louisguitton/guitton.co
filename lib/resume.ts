import { Network } from '../types/resume/Basics'
import { JsonResume } from '../types/resume/JsonResume'

/**
 * Ref: https://leerob.io/blog/resume
 *
 * - Omit unnecessary information (GPA, projects, internships, phone number).
 * - keep clear start and end dates for experience
 * - keep skill section, great for ATS
 * - add clear metrics to bullet points in experience
 * - keep it 1 page
 * - keep about section short, leave the rest on linkedin or website
 */
const includeEducationCourse = false
const includeLanguages = false
const includeInternships = false
export const resume: JsonResume = {
  $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
  awards: [],
  basics: {
    email: 'admin@guitton.co',
    image: '/images/louis.jpg',
    label: 'Tech Lead NFT, Machine Learning Engineer',
    location: {
      city: 'Berlin',
      countryCode: 'DE',
    },
    name: 'Louis Guitton',
    profiles: [
      {
        network: 'linkedin' as Network,
        url: 'https://www.linkedin.com/in/louisguitton/',
        username: 'louisguitton',
      },
      {
        network: 'github' as Network,
        url: 'https://github.com/louisguitton',
        username: 'louisguitton',
      },
    ],
    summary: 'Looking for an environment where I can grow as an engineer and influence technology.',
    url: 'https://guitton.co/',
    website: 'https://guitton.co/',
  },
  certificates: [],
  education: [
    {
      area: 'Executive Engineering',
      courses: includeEducationCourse
        ? [
            'Thesis: Measuring online earned media for Automotive and Cosmetics brands using NLP and web crawlers',
          ]
        : [],
      endDate: '2016-12-31',
      institution: 'MINES ParisTech PSL',
      location: {
        city: 'Paris',
        countryCode: 'FR',
      },
      startDate: '2012-12-31',
      studyType: 'MSc',
      url: 'https://mines-paristech.eu/',
    },
  ],
  interests: [],
  languages: includeLanguages
    ? [
        {
          fluency: 'Native Speaker',
          language: 'French',
        },
        {
          fluency: 'Fluent',
          language: 'English',
        },
        {
          fluency: 'Basic',
          language: 'German',
        },
      ]
    : [],
  meta: {
    canonical: 'https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json',
    lastModified: '2017-12-24T15:53:00',
    version: 'v1.0.0',
  },
  projects: [
    {
      entity: 'guitton.co',
      highlights: [],
      keywords: ['Static Site Generators', 'Serverless', 'SEO'],
      name: 'Blogging',
      summary:
        'Sharing my thougts with 1k+ users per month. Ranking #1 on google.com for <i>"fastapi monitoring"</i> and for <i>"amundsen dbt"</i>',
      url: 'https://guitton.co/posts',
    },
  ],
  publications: [],
  references: [],
  skills: [
    {
      keywords: ['python', 'AWS', 'Postgres', 'Redis', 'terraform', 'Kubernetes'],
      name: 'Backend',
    },
    {
      keywords: ['spaCy', 'networkX', 'pytextrank', 'ElasticSearch'],
      name: 'NLP',
    },
    {
      keywords: ['mlflow', 'label-studio', 'SageMaker', 'optuna'],
      name: 'MLOps',
    },
    {
      keywords: ['airflow', 'SQL', 'dbt', 'spark', 'Snowplow', 'Redshift'],
      name: 'Data Engineering',
    },
    {
      keywords: ['TypeScript', 'NextJS', 'TailwindCSS', 'ReactJS'],
      name: 'MVP Building',
    },
  ],
  volunteer: [],
  work: [
    {
      highlights: [
        'Built blockchain MVP including smart contract, frontend, and backend.',
        'Hired, managed and growed one MLE intern.',
        'Set the technical bar for Data Science, Data Engineering, and Data Analytics.',
        'Designed and implemented a human-in-the-loop entity linking system for news tagging in 7 languages.',
        'Used knowledge graphs, language models, text classification and topic modeling.',
        // '<b>News tagging</b>: Researched, designed, built and deployed a custom human-in-the-loop entity linking service for tagging football news in 7 languages. Final solution makes use of <i>referent graphs</i>. Applied other NLP techniques like language models, NER, text classification, topic modeling. I favour data-centric ML over model-centric.',
        // '<b>Recommenders systems</b>: Built recommender systems PoCs using both custom and off-the-shelf algorithms.',
        // '<b>First Data Science hire</b>: Defined the Data Science project plan and the MLOps stack. Built quick wins like <i>prophet</i> forecasting or <i>XGBoost</i> classification for tabular data or templated news generation slackbot.',
        // '<b>Data Consumption</b>: [for humans] introduced <i>Metabase</i>. [for machines] built blueprints for programmatic data consumption using APIs, emails, slackbots, Redshift Data API, Redis or S3 unloads.',
        // "<b>Data Engineering</b>: Refactored parts of OneFootball's analytics stack: roll out <i>airflow</i> for scheduling and ingestion, roll out <i>dbt</i> for data modeling on the Amazon Redshift Data Warehouse. Architecture design and code reviews.",
      ],
      location: {
        city: 'Berlin',
        countryCode: 'DE',
      },
      name: 'OneFootball',
      position: 'Tech Lead NFT and Principal Machine Learning Engineer',
      startDate: '2018-10-31',
      summary:
        'Football media platform serving 15 million MAUs with news, OTT streaming, DFS and NFTs in 12 languages.',
      url: 'https://onefootball.com/',
    },
    {
      highlights: [
        'Data Solutions, teaching and open source',
        // '<b>Data Solutions</b>: Built data stack for entrepreneurship NGO and fintech startup. Deliver <i>airflow</i> workshop for automotive digital lab.',
        // '<b>Teaching</b>: Built and taught ML and IoT classes for engineering MBA in Paris.',
        // '<b>Open Source</b>: Contribute to <i>pytextrank</i> and <i>kglab</i> of Paco Nathan. Contribute to <i>Apache Airflow</i>.',
      ],
      location: {
        city: 'Berlin',
        countryCode: 'DE',
      },
      name: 'Side Hustle',
      position: 'Freelance Software Engineer and Data Scientist',
      startDate: '2017-06-30',
      summary: '',
      url: 'https://guitton.co/about#freelance',
    },
    {
      endDate: '2018-06-30',
      highlights: [
        // scalable hiring personality screening
        // Worked with Isabelle Guyon's research group
        '<b>Entrepreneurship</b>: Developed an idea using computer vision, went in front of angel investors.',
      ],
      location: {
        city: 'Berlin',
        countryCode: 'DE',
      },
      name: 'Entrepreneur First',
      position: 'Entrepreneur in residence',
      startDate: '2018-04-30',
      summary: 'World-wide deep-tech incubator investing in early-career co-founders.',
      url: 'https://www.joinef.com/',
    },
    {
      endDate: '2018-03-31',
      highlights: [
        '<b>Deep Learning & Big Data</b>: Built bettings odds models and a recommendation engine with <i>tensorflow</i>.',
      ],
      location: {
        city: 'Berlin',
        countryCode: 'DE',
      },
      name: 'DOJO Madness',
      position: 'Data Scientist',
      startDate: '2016-08-31',
      summary: 'ESports startup selling analytics and coaching tools to gamers.',
      url: 'https://www.bayesholding.com/',
    },
  ].concat(
    includeInternships
      ? [
          {
            endDate: '2016-06-30',
            highlights: [],
            location: {
              city: 'Paris',
              countryCode: 'FR',
            },
            name: 'Ekimetrics',
            position: 'Data Science Intern',
            startDate: '2016-01-31',
            summary:
              'Measuring online earned media for Automotive and Cosmetics brands using NLP and web crawlers.',
            url: 'https://ekimetrics.com/',
          },
          {
            endDate: '2015-09-30',
            highlights: [],
            location: {
              city: 'Brighton',
              countryCode: 'UK',
            },
            name: 'EDF Energy',
            position: 'R&D Engineer',
            startDate: '2015-02-28',
            summary:
              'Software development within the Digital Innovation team of R&D UK centre of an energy leader.',
            url: 'https://www.edfenergy.com/about/research-development',
          },
          {
            endDate: '2014-12-31',
            highlights: [],
            location: {
              city: 'Singapore',
              countryCode: 'SG',
            },
            name: 'Bosch Southeast Asia',
            position: 'R&D Engineer Intern',
            startDate: '2014-06-30',
            summary:
              'Data mining for photovoltaics energy storage optimisation within he Power Electronics R&D team.',
            url: 'https://www.bosch.com.sg/our-company/bosch-in-singapore/bishan/',
          },
        ]
      : []
  ),
}
