import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import spaces from "./space/spaceReducer";
import mySpace from "./mySpace/mySpaceReducer";

export default combineReducers({
  appState,
  user,
  spaces,
  mySpace,
});
