import React from "react";
import Login from "../views/containers/Login";
import JobList from "../views/containers/JobList";
import url from "./url";

const routes = [
  {
    id: 1,
    name: url.JOB_LIST.name,
    path: url.JOB_LIST.route,
    exact: true,
    content: <JobList />,
    breadCrumb: [
      {
        id: 1,
        href: url.JOB_LIST.route,
        name: url.JOB_LIST.name,
      },
    ],
  },
  {
    id: 2,
    name: url.LOGIN.name,
    path: url.LOGIN.route,
    exact: true,
    content: <Login />,
  },
];

export default routes;
