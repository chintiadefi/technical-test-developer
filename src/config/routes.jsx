import React from "react";
import ListUser from "../views/containers/ListUsers/ListUsers";
import url from "./url";

const routes = [
  {
    id: 1,
    name: url.LIST_USER.name,
    path: url.LIST_USER.route,
    exact: true,
    content: <ListUser />,
    breadCrumb: [{
      id: 1,
      href: url.LIST_USER.route,
      name: url.LIST_USER.name,
    },
    ],
  },
];

export default routes;
