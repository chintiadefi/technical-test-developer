import { combineReducers } from "redux";
import usersReducer from "./reducers/users";
import albumsReducer from "./reducers/albums";

export default combineReducers({
  users: usersReducer,
  albums: albumsReducer,
});
