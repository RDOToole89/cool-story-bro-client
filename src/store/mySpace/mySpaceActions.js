import Axios from "axios";
import { API_URL } from "../../config/constants";
import { appDoneLoading, appLoading } from "../appState/actions";

export const saveUserSpace = (userSpaceObject) => {
  return {
    type: "SAVE_USER_SPACE",
    payload: userSpaceObject,
  };
};

export const fetchUserSpace = () => async (dispatch, getState) => {
  dispatch(appLoading());

  try {
    const userSpace = await Axios.get(`${API_URL}/me`);

    dispatch(saveUserSpace(userSpace));

    if (userSpace) {
      dispatch(appDoneLoading());
    }
  } catch (e) {
    console.log(e);
  }
};
