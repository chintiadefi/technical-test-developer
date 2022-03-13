import { GET_DETAIL_PHOTO } from "../actions/index";

export const initialState = {};

const reducer = (state = initialState, action = {}) => {
  if (action.type === GET_DETAIL_PHOTO) {
    return action.data;
  }
  return state;
};

export default reducer;
