import { GET_POSTS_USER } from "../actions/index";

export const initialState = [];

const reducer = (state = initialState, action = []) => {
  if (action.type === GET_POSTS_USER) {
    return action.data;
  }
  return state;
};

export default reducer;
