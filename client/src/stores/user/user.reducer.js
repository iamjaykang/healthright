import USER_ACTION_TYPES from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  //handle the SET_CURRENT_USER action and update the currentUser in state

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
