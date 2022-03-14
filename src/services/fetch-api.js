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

export const GetUsersPosts = async (userId = null) => {
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

export const GetDetailPost = async (postId = null) => {
  let result = [];

  await ApiRequest.get(
    `${constants.baseUrl}/${constants.service.posts}/${postId}`,
  ).then((res) => {
    result = res;
  })
    .catch((err) => {
      result = err;
    });

  return result;
};

export const GetPostComments = async (postId = null) => {
  let result = [];

  await ApiRequest.get(
    `${constants.baseUrl}/${constants.service.comments}?postId=${postId}`,
  ).then((res) => {
    result = res;
  })
    .catch((err) => {
      result = err;
    });

  return result;
};

export const addEditComment = async (payload = {}, commentId = null) => {
  let result = [];

  if (commentId) {
    await ApiRequest.put(
      `${constants.baseUrl}/${constants.service.comments}/${commentId}`,
      { body: payload },
    ).then((res) => {
      result = res;
    })
      .catch((err) => {
        result = err;
      });
  } else {
    await ApiRequest.post(
      `${constants.baseUrl}/${constants.service.comments}`,
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

export const deleteComment = async (commentId = null) => {
  let result = [];

  await ApiRequest.delete(
    `${constants.baseUrl}/${constants.service.comments}/${commentId}`,
  ).then((res) => {
    result = res;
  })
    .catch((err) => {
      result = err;
    });

  return result;
};

export const addEditPost = async (payload = {}, postId = null) => {
  let result = [];

  if (postId) {
    await ApiRequest.put(
      `${constants.baseUrl}/${constants.service.posts}/${postId}`,
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

export const deletePost = async (postId = null) => {
  let result = [];

  await ApiRequest.delete(
    `${constants.baseUrl}/${constants.service.posts}/${postId}`,
  ).then((res) => {
    result = res;
  })
    .catch((err) => {
      result = err;
    });

  return result;
};

export const GetUserAlbums = async (userId = null) => {
  let result = [];

  await ApiRequest.get(
    `${constants.baseUrl}/${constants.service.albums}?userId=${userId}`,
  ).then((res) => {
    result = res;
  })
    .catch((err) => {
      result = err;
    });

  return result;
};

export const GetAlbumPhotos = async (albumId = null) => {
  let result = [];

  await ApiRequest.get(
    `${constants.baseUrl}/${constants.service.photos}?albumId=${albumId}`,
  ).then((res) => {
    result = res;
  })
    .catch((err) => {
      result = err;
    });

  return result;
};

export const GetDetailPhoto = async (photoId = null) => {
  let result = [];

  await ApiRequest.get(
    `${constants.baseUrl}/${constants.service.photos}/${photoId}`,
  ).then((res) => {
    result = res;
  })
    .catch((err) => {
      result = err;
    });

  return result;
};
