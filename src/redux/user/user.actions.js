import UserActionTypes from "./user.types";

export const setUser = (user) => ({
  type: UserActionTypes.SET_USER,
  payload: user,
});

export const searchUser = (queryString) => ({
  type: UserActionTypes.SEARCH_USER,
  payload: queryString,
});
