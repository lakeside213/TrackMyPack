import { FETCH_USER, CREATE_PACKAGE } from "../consts/types";

const INITIAL_STATE = { packages: [], settings: {} };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state };
    case CREATE_PACKAGE:
      let index = state.packages.length;
      const {
        packageName,
        trackingNumber,
        isDelivered,
        events,
        courier
      } = action.payload;
      return {
        ...state,
        packages: [
          ...state.packages,
          {
            id: index,
            packageName,
            trackingNumber,
            events,
            isDelivered,
            courier
          }
        ]
      };
    default:
      return state;
  }
}
