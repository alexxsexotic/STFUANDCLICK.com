import User from "../models/User";
import { SET_SESSION } from "./actionTypes";

const initialState: User = {
  session: "",
};

export default (state: User = initialState, action: any) => {
  switch (action.type) {
    case SET_SESSION:
      return { ...state, session: action.payload };
    default:
  }
  return state;
};
