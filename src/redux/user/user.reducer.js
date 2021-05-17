import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  users: [],
  currentUser: null,
};

const userReducer = (previousState = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        ...previousState,
        users: action.payload,
      };
    case UserActionTypes.SEARCH_USER:
      return {
        ...previousState,
        currentUser: previousState.users.filter(
          (user) => user.username === action.payload
        ),
      };
    default:
      return previousState;
  }
};

export default userReducer;
