import { GET_LIST_USERS } from "../actions/index";

export const initialState = [];

const reducer = (state = initialState, action = []) => {
  if (action.type === GET_LIST_USERS) {
    return action.data;
  }
  return state;
};

export default reducer;
