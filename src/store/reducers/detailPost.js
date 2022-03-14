import { GET_DETAIL_POST } from "../actions/index";

export const initialState = {};

const reducer = (state = initialState, action = {}) => {
  if (action.type === GET_DETAIL_POST) {
    return action.data;
  }
  return state;
};

export default reducer;
