import Axios from "axios";
import { API_URL } from "../../config/constants";
import { appDoneLoading, appLoading } from "../appState/actions";

export const saveUserSpace = (userSpaceObject) => {
  return {
    type: "SAVE_USER_SPACE",
    payload: userSpaceObject,
  };
};

export const saveNewPost = (userPostObject) => {
  return {
    type: "SAVE_NEW_POST",
    payload: userPostObject,
  };
};

export const createNewPost = (userPostObject) => async (dispatch, getState) => {
  dispatch(saveNewPost());

  try {
    const response = Axios.post(`${API_URL}`, { ...userPostObject });

    console.log("CREATE_NEW_POST response", response);
  } catch (e) {
    console.log(e);
  }
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

export const deleteStory = (storyId) => async (dispatch, getState) => {
  console.log("INSIDE DELETESTORY?");

  if (storyId) {
    try {
      const response = await Axios.delete(`${API_URL}/spaces/stories`, { data: { id: storyId } });
      console.log("WHAT IS RESPONSE???!", response);
    } catch (e) {
      console.log(e.message);
    }
  }
};
