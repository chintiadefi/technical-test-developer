import React from "react";
import ListUser from "../views/containers/ListUsers/ListUsers";
import ListAlbums from "../views/containers/ListAlbums/ListAlbums";
import ListPosts from "../views/containers/ListPosts/ListPosts";
import url from "./url";

const routes = [
  {
    id: 1,
    name: url.LIST_USER.name,
    path: url.LIST_USER.route,
    exact: true,
    content: <ListUser />,
    breadCrumb: [
      {
        id: 1,
        href: url.LIST_USER.route,
        name: url.LIST_USER.name,
      },
    ],
  },
  {
    id: 2,
    name: url.USER_POSTS.name,
    path: url.USER_POSTS.route,
    exact: true,
    content: <ListPosts />,
    breadCrumb: [{
      id: 1,
      href: url.LIST_USER.route,
      name: url.LIST_USER.name,
    },
    {
      id: 2,
      href: url.USER_POSTS.route,
      name: url.USER_POSTS.name,
    },
    ],
  },
  {
    id: 3,
    name: url.USER_ALBUMS.name,
    path: url.USER_ALBUMS.route,
    exact: true,
    content: <ListAlbums />,
    breadCrumb: [{
      id: 1,
      href: url.LIST_USER.route,
      name: url.LIST_USER.name,
    },
    {
      id: 2,
      href: url.USER_ALBUMS.route,
      name: url.USER_ALBUMS.name,
    },
    ],
  },
];

export default routes;
