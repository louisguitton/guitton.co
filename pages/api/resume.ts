import { NextApiRequest, NextApiResponse } from "next"

const resume = {
  $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
  awards: [],
  basics: {
    email: 'admin@guitton.co',
    image: 'louis.jpeg',
    label: 'Senior Machine Learning Engineer at OneFootball',
    location: {
      city: 'Berlin',
      countryCode: 'DE',
    },
    name: 'Louis Guitton',
    phone: '+33 6 70 98 12 56',
    profiles: [
      {
        network: 'Linkedin',
        url: 'https://www.linkedin.com/in/louisguitton/',
        username: 'louisguitton',
      },
      {
        network: 'Github',
        url: 'https://github.com/louisguitton',
        username: 'louisguitton',
      },
      {
        network: 'Stack Overflow',
        url: 'https://stackoverflow.com/users/3823815/louis-guitton',
        username: 'louis-guitton',
      },
    ],
    summary:
      'Looking for a Senior Machine Learning Engineering position where I can grow and evolve as an engineer.\n Seeking the opportunity to influence the technology within a company.',
    url: 'https://guitton.co/',
    website: 'https://guitton.co/',
  },
  education: [
    {
      area: 'Executive Engineering',
      courses: [
        'Thesis: Measuring online earned media for Automotive and Cosmetics brands using NLP and web crawlers',
      ],
      endDate: '2016-12-31',
      institution: 'MINES ParisTech PSL',
      location: {
        city: 'Paris',
        countryCode: 'FR',
      },
      score: '',
      startDate: '2012-12-31',
      studyType: 'MSc',
      url: 'https://mines-paristech.eu/',
    },
  ],
  interests: [],
  languages: [
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
    // {
    //   fluency: 'Basic',
    //   language: 'Chinese',
    // },
  ],
  meta: {
    canonical: 'https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json',
    lastModified: '2017-12-24T15:53:00',
    version: 'v1.0.0',
  },
  projects: [
    {
      entity: 'guitton.co',
      highlights: [
        '1k+ users per month',
        'Ranking #1 on google.com for <i>fastapi monitoring</i> and for <i>amundsen dbt</i>',
      ],
      keywords: ['Static Site Generators', 'Serverless', 'SEO'],
      name: 'Blogging',
      summary: 'Sharing my thougts and learning to write.',
      url: 'https://guitton.co/posts',
    },
    {
      name: 'Journaling',
      summary:
        'Journaling with <i>Obsidian</i> for research use as well as personal use. Applying Knowledge Graphs.',
    },
    {
      name: 'Accounting',
      summary:
        'Using plaintext double-entry accounting for your personal finances with <i>beancount</i>.',
    },
    {
      name: 'Football',
      summary: 'Playing football and analysing your Strava data.',
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
      description: 'Awesome football media company',
      highlights: [
        '<b>News tagging</b>: Researched, designed, built and deployed a custom human-in-the-loop entity linking service for tagging football news in 7 languages. Final solution makes use of <i>referent graphs</i>. Applied other NLP techniques like language models, NER, text classification, topic modeling. I favour data-centric ML over model-centric.',
        '<b>Recommenders systems</b>: Built recommender systems PoCs using both custom and off-the-shelf algorithms.',
        '<b>First Data Science hire</b>: Defined the Data Science project plan and the MLOps stack. Built quick wins like <i>prophet</i> forecasting or <i>XGBoost</i> classification for tabular data or templated news generation slackbot.',
        '<b>Data Consumption</b>: [for humans] introduced <i>Metabase</i>. [for machines] built blueprints for programmatic data consumption using APIs, emails, slackbots, Redshift Data API, Redis or S3 unloads.',
        "<b>Data Engineering</b>: Refactored parts of OneFootball's analytics stack: roll out <i>airflow</i> for scheduling and ingestion, roll out <i>dbt</i> for data modeling on the Amazon Redshift Data Warehouse. Architecture design and code reviews.",
      ],
      keywords: ['Data-centric NLP', 'RecSys', 'MLOps'],
      location: 'Berlin, DE',
      name: 'OneFootball',
      position: 'Senior Machine Learning Engineer',
      startDate: '2018-10-31',
      summary:
        'Develop and deploy machine learning solutions for a football media platform with news, stats, highlights and match streams.',
      website: 'https://onefootball.com/',
    },
    {
      highlights: [
        '<b>Data Solutions</b>: Built data stack for entrepreneurship NGO and fintech startup. Deliver <i>airflow</i> workshop for automotive digital lab.',
        '<b>Teaching</b>: Built and taught ML and IoT classes for engineering MBA in Paris.',
        '<b>Open Source</b>: Contribute to <i>pytextrank</i> and <i>kglab</i> of Paco Nathan. Contribute to <i>Apache Airflow</i>.',
      ],
      location: 'Berlin, DE',
      name: 'Freelance',
      position: 'Software Engineer and Data Scientist',
      startDate: '2017-06-30',
      summary: 'Curiosity-driven side hustle with reasonable hours',
      website: 'https://guitton.co/freelance/',
    },
    {
      endDate: '2018-06-30',
      highlights: [
        '<b>CTO</b>: Failed raising 1M\u20ac seed round as CTO after 4 months incubation.',
        "<b>Computer Vision</b>: Used deep learning computer vision to build a scalable hiring personality screening. Worked with Isabelle Guyon's research group.",
      ],
      location: 'Berlin, DE',
      name: 'Entrepreneur First',
      position: 'Entrepreneur in residence',
      startDate: '2018-04-30',
      summary: 'London-based accelerator turning strangers into startup founders.',
      website: 'https://www.joinef.com/',
    },
    {
      endDate: '2018-03-31',
      highlights: [
        '<b>Deep Learning</b>: Built a Neural Networks recommendation engine in <i>tensorflow</i> to coach eSports players.',
      ],
      location: 'Berlin, DE',
      name: 'DOJO Madness',
      position: 'Data Scientist',
      startDate: '2016-08-31',
      summary: 'Mobile app AI coach for League of Legends competitive gamers.',
      website: 'https://www.bayesholding.com/',
    },
    {
      endDate: '2016-06-30',
      highlights: [],
      location: 'Paris, FR',
      name: 'Ekimetrics',
      position: 'Data Science Intern',
      startDate: '2016-01-31',
      summary:
        'Measuring online earned media for Automotive and Cosmetics brands using NLP and web crawlers.',
      website: 'https://ekimetrics.com/',
    },
    {
      endDate: '2015-09-30',
      highlights: [],
      location: 'Brighton, UK',
      name: 'EDF Energy',
      position: 'R&D Engineer',
      startDate: '2015-02-28',
      summary:
        'Software development within the Digital Innovation team of R&D UK centre of an energy leader.',
      website: 'https://www.edfenergy.com/about/research-development',
    },
    {
      endDate: '2014-12-31',
      highlights: [],
      location: 'Singapore, SG',
      name: 'Bosch Southeast Asia',
      position: 'R&D Engineer Intern',
      startDate: '2014-06-30',
      summary:
        'Data mining for photovoltaics energy storage optimisation within he Power Electronics R&D team.',
      website: 'https://www.bosch.com.sg/our-company/bosch-in-singapore/bishan/',
    },
  ],
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(resume)
}
