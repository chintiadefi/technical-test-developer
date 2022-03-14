import { GET_LIST_COMMENTS } from "../actions/index";

export const initialState = [];

const reducer = (state = initialState, action = []) => {
  if (action.type === GET_LIST_COMMENTS) {
    return action.data;
  }
  return state;
};

export default reducer;
