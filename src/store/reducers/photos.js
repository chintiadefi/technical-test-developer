import { GET_PHOTOS_ALBUM } from "../actions/index";

export const initialState = [];

const reducer = (state = initialState, action = []) => {
  if (action.type === GET_PHOTOS_ALBUM) {
    return action.data;
  }
  return state;
};

export default reducer;
