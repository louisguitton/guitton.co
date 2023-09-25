import { LocationMarkerIcon } from "@heroicons/react/solid";
import { FC } from "react";
import { Location } from "./types";

const Location: FC<{ location?: Location }> = ({ location }) => {
  if (location) {
    return (
      <span className="flex font-bold text-gray-500">
        <LocationMarkerIcon className="w-4 h-4" />
        <span className="">{`${location.city}, ${location.countryCode}`}</span>
      </span>
    );
  }
  return <></>;
};

export default Location;
