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

  const token = getState().user.token;

  if (token) {
    try {
      const response = await Axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log("WHAT IS USERSPACE?", response.data);

      dispatch(saveUserSpace(response.data));

      if (response) {
        dispatch(appDoneLoading());
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    return "User not logged in.";
  }
};
