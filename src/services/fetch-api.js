import ApiRequest from "./request";
import constants from "../config/constant";

export const GetUsers = async () => {
  let result = [];

  await ApiRequest.get(
    `${constants.baseUrl}/${constants.service.users}`,
  ).then((res) => {
    result = res;
  })
    .catch((err) => {
      result = err;
    });

  return result;
};

export const GetUsersPosts = async (userId) => {
  let result = [];

  await ApiRequest.get(
    `${constants.baseUrl}/${constants.service.posts}?userId=${userId}`,
  ).then((res) => {
    result = res;
  })
    .catch((err) => {
      result = err;
    });

  return result;
};
