import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export type Award = {
  title: string;
  date: string;
  awarder: string;
  summary: string;
};

export type Profile = {
  icon: IconDefinition;
  url: string;
  username: string;
};

export type Basics = {
  name: string;
  label: string;
  image: string;
  email: string;
  phone?: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Profile[];
  // not in https://github.com/jsonresume/resume-schema/blob/7095651fbbb593d2c5dc2db3095412b170d74d2e/schema.json
  website?: string;
};

export type Certificate = {
  name: string;
  date: string;
  url: string;
  issuer: string;
};

export type Education = {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate?: string;
  score?: string;
  courses: string[];
  // not in https://github.com/jsonresume/resume-schema/blob/7095651fbbb593d2c5dc2db3095412b170d74d2e/schema.json
  location?: Location;
};

export type Interest = {
  name: string;
  keywords: string[];
};

export type Language = {
  language: string;
  fluency: string;
};

export type Location = {
  address?: string;
  postalCode?: string;
  city: string;
  countryCode: string;
  region?: string;
};

export type Project = {
  name: string;
  description?: string;
  highlights?: string[];
  keywords?: string[];
  startDate?: string;
  endDate?: string;
  url?: string;
  roles?: string[];
  entity?: string;
  type?: string;
  // not in https://github.com/jsonresume/resume-schema/blob/7095651fbbb593d2c5dc2db3095412b170d74d2e/schema.json
  summary: string;
};

export type Publication = {
  name: string;
  publisher: string;
  releaseDate: string;
  url: string;
  summary: string;
};

export type Reference = {
  name: string;
  reference: string;
};

export type Skill = {
  name: string;
  level?: string;
  keywords: string[];
};

export type Volunteer = {
  organization: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
};

export type Work = {
  name: string;
  location: Location;
  description?: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights: string[];
  // not in https://github.com/jsonresume/resume-schema/blob/7095651fbbb593d2c5dc2db3095412b170d74d2e/schema.json
  keywords?: string[];
};

export type JsonResume = {
  $schema: string;
  awards: Award[];
  basics: Basics;
  education: Education[];
  interests: Interest[];
  languages: Language[];
  meta: {
    canonical: string;
    version: string;
    lastModified: string;
  };
  projects: Project[];
  publications: Publication[];
  references: Reference[];
  skills: Skill[];
  volunteer: Volunteer[];
  work: Work[];
  certificates: Certificate[];
};
