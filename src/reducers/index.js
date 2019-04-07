import { combineReducers } from "redux";
import bottomDrawer from "./bottomDrawerReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  user,
  bottomDrawer
});

export default rootReducer;
