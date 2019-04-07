import { FETCH_USER, CREATE_PACKAGE, FETCH_PACKAGE } from "../consts/types";

const INITIAL_STATE = { selectedPackage: {}, packages: [], settings: {} };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER: {
      return { ...state };
    }

    case CREATE_PACKAGE: {
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
            packageName: action.pay,
            trackingNumber,
            events,
            isDelivered,
            courier
          }
        ]
      };
    }
    case FETCH_PACKAGE: {
      const { trackingNumber } = action;

      const packIndex = state.packages.findIndex(pack => {
        return trackingNumber === pack.trackingNumber;
      });
      console.log(state.packages[packIndex]);
      return {
        ...state,
        selectedPackage: {
          ...state.packages[packIndex]
        }
      };
    }
    default:
      return state;
  }
}
