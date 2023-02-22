import React from "react";
import url from "./url";
import Login from "../views/containers/Login";
import JobList from "../views/containers/JobList";
import JobDetail from "../views/containers/JobDetail";

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
  {
    id: 3,
    name: url.JOB_DETAIL.name,
    path: url.JOB_DETAIL.route,
    exact: true,
    content: <JobDetail />,
    breadCrumb: [
      {
        id: 1,
        href: url.JOB_LIST.route,
        name: url.JOB_LIST.name,
      },
      {
        id: 2,
        href: url.JOB_DETAIL.route,
        name: url.JOB_DETAIL.name,
      },
    ],
  },
];

export default routes;
