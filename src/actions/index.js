import {
  CREATE_PACKAGE,
  OPEN_BOTTOM_DRAWER,
  FETCH_PACKAGE
} from "../consts/types";
import { validateNumber, getCourier } from "../NumberValidation";
import axios from "axios";

export const addPackage = (trackingNumber, packageName) => {
  return async function(dispatch) {
    try {
      if (validateNumber(trackingNumber) === true) {
        const lang = navigator.language || navigator.userLanguage;
        let response = await axios.post("http://localhost:8000/trackpackage", {
          systemLang: lang,
          courier: getCourier(trackingNumber),
          trackingNumber: trackingNumber
        });
        response.data["packageName"] = packageName;
        dispatch({ type: CREATE_PACKAGE, payload: response.data });
      }
    } catch (e) {
      console.log(e);
    }
  };
};
export const fetchPackage = trackingNumber => ({
  type: FETCH_PACKAGE,
  trackingNumber
});
export const readClipboard = () => {
  return async function(dispatch) {
    try {
      const content = await navigator.clipboard.readText();
      if (validateNumber(content) === true) {
        const lang = navigator.language || navigator.userLanguage;
        const response = await axios.post(
          "http://localhost:8000/trackpackage",
          {
            systemLang: lang,
            courier: getCourier(content),
            trackingNumber: content
          }
        );
        dispatch({ type: OPEN_BOTTOM_DRAWER, payload: response });
      }
    } catch (e) {}
  };
};
