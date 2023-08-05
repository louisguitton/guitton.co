import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { Location } from "./Location";

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
