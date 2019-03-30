import { FETCH_USER } from "../consts/types";

const INITIAL_STATE = { settings: {} };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state };

    default:
      return state;
  }
}
