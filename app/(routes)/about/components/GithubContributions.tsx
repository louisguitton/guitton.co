"use client";

import { CheckIcon } from "@heroicons/react/solid";
import fetcher from "lib/fetcher";
import moment from "moment";
import { ReactElement } from "react";
import useSWR from "swr";

const GithubContributions = () => {
  const { data, error } = useSWR<
    {
      createdAt: string;
      url: string;
      title: string;
      repository: string;
      repositoryDescription: string;
    }[]
  >("/api/github/contributions?limit=5", fetcher);
  let githubState: ReactElement = <></>;
  if (error) githubState = <div>failed to load</div>;
  if (!data) githubState = <div>loading...</div>;
  if (data) {
    githubState = (
      <ul>
        {data.map((contrib, i) => {
          return (
            <a
              key={i}
              href={contrib.url}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <li className="flex justify-between">
                <span className="flex items-center space-x-2">
                  <CheckIcon className="w-4 h-4 text-gray-400" />
                  <span>
                    {contrib.title} on <b>{contrib.repository}</b>
                  </span>
                </span>
                <span className="font-light text-gray-500">
                  {moment(contrib.createdAt).format("MMMM DD, YYYY")}
                </span>
              </li>
            </a>
          );
        })}
      </ul>
    );
  }
  return <>{githubState}</>;
};

export default GithubContributions;
