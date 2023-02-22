
export const initialState = {};

const reducer = (state = initialState, action = {}) => {
  if (action.type === "LOGIN") {
    return action.data;
  }
  return state;
};

export default reducer;
