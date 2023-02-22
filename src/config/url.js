const url = {
  JOB_LIST: { name: "Job List", route: "/" },
  LOGIN: { name: "Login", route: "/login" },
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
