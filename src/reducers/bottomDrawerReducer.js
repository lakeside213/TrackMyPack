import { OPEN_BOTTOM_DRAWER, CLOSE_BOTTOM_DRAWER } from "../consts/types";

const INITIAL_STATE = { isOpen: false, data: {} };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_BOTTOM_DRAWER:
      console.log("HEY");
      return { ...state, isOpen: true, data: { ...action.payload } };
    case CLOSE_BOTTOM_DRAWER:
      return { ...state, isOpen: false, data: {} };
    default:
      return state;
  }
}
