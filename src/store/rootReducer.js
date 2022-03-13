import { combineReducers } from "redux";
import usersReducer from "./reducers/users";
import postsReducer from "./reducers/posts";
import albumsReducer from "./reducers/albums";
import photosReducer from "./reducers/photos";
import detailPhotoReducer from "./reducers/detailPhoto";

export default combineReducers({
  users: usersReducer,
  posts: postsReducer,
  albums: albumsReducer,
  photos: photosReducer,
  detailPhoto: detailPhotoReducer,
});
