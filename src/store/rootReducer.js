import { combineReducers } from "redux";
import usersReducer from "./reducers/users";
import postsReducer from "./reducers/posts";
import albumsReducer from "./reducers/albums";

export default combineReducers({
  users: usersReducer,
  posts: postsReducer,
  albums: albumsReducer,
});
