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

export const GetUsersPosts = async (id) => {
  let result = [];

  await ApiRequest.get(
    `${constants.baseUrl}/${constants.service.posts}?userId=${id}`,
  ).then((res) => {
    result = res;
  })
    .catch((err) => {
      result = err;
    });

  return result;
};

export const addEditPost = async (payload = {}, id = null) => {
  let result = [];

  if (id) {
    await ApiRequest.put(
      `${constants.baseUrl}/${constants.service.posts}/${id}`,
      { body: payload },
    ).then((res) => {
      result = res;
    })
      .catch((err) => {
        result = err;
      });
  } else {
    await ApiRequest.post(
      `${constants.baseUrl}/${constants.service.posts}`,
      { body: payload },
    ).then((res) => {
      result = res;
    })
      .catch((err) => {
        result = err;
      });
  }

  return result;
};

export const deletePost = async (id = null) => {
  let result = [];

  await ApiRequest.delete(
    `${constants.baseUrl}/${constants.service.posts}/${id}`,
  ).then((res) => {
    result = res;
  })
    .catch((err) => {
      result = err;
    });

  return result;
};

export const GetUsersAlbums = async (id = null) => {
  let result = [];

  await ApiRequest.get(
    `${constants.baseUrl}/${constants.service.albums}?userId=${id}`,
  ).then((res) => {
    result = res;
  })
    .catch((err) => {
      result = err;
    });

  return result;
};
