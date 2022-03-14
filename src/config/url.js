const url = {
  LIST_USER: { name: "List User", route: "/" },
  USER_POSTS: { name: "List Posts of User", route: "/posts/:userId" },
  LIST_COMMENTS: { name: "List Comments of Post", route: "/comments/:postId" },
  USER_ALBUMS: { name: "List Albums of User", route: "/albums/:userId" },
  ALBUM_PHOTOS: { name: "List Photos of Album", route: "/photos/:albumId" },
};

export const generateDynamicUrl = (path, params = {}) => {
  let result = path;
  if (params) {
    // eslint-disable-next-line array-callback-return
    Object.keys(params).map((key) => {
      const regex = new RegExp(`/:${key}`, "gi");
      result = result.replace(regex, `/${params[key]}`);
    });
  }
  return result;
};

export default url;
