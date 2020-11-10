import Axios from "axios";
import { API_URL } from "../../config/constants";
import { appDoneLoading, appLoading } from "../appState/actions";

export const saveUserSpace = (space) => {
  return {
    type: "SAVE_USER_SPACE",
    payload: { ...space },
  };
};

export const saveNewPost = (post) => {
  return {
    type: "SAVE_NEW_POST",
    payload: { ...post },
  };
};

export const setPostSuccess = () => {
  return {
    type: "SET_POST_SUCCESS",
  };
};
export const setPostFailure = () => {
  return {
    type: "SET_POST_FAILURE",
  };
};

export const saveUpdatedSpace = (space) => {
  return {
    type: "SAVE_UPDATED_SPACE",
    payload: { ...space },
  };
};

export const setUpdateSuccess = () => {
  return {
    type: "SET_UPDATE_SUCCESS",
  };
};
export const setUpdateFailure = () => {
  return {
    type: "SET_UPDATE_FAILURE",
  };
};

export const createNewPost = (post) => async (dispatch, getState) => {
  const { name, content, imageUrl, spaceId } = post;
  const token = getState().user.token;

  if (!name || !content || !imageUrl || !spaceId) {
    return;
  }

  try {
    const response = await Axios.post(
      `${API_URL}/spaces/stories`,
      { name, content, imageUrl, spaceId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (response) {
      dispatch(saveNewPost({ ...post }));
      setTimeout(() => {
        dispatch(setPostFailure());
      }, 2000);
    }
  } catch (e) {
    console.log(e);
  }
};

export const fetchUserSpace = () => async (dispatch, getState) => {
  dispatch(appLoading());
  const token = getState().user.token;

  if (!token) {
    return;
  }

  try {
    const response = await Axios.get(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(saveUserSpace({ ...response.data }));

    if (response) {
      dispatch(appDoneLoading());
    }
  } catch (e) {
    console.log(e);
  }
};

export const deleteStory = (storyId) => async (dispatch, getState) => {
  const token = getState().user.token;

  console.log("IS THERE A TOKEN?", token);

  console.log(storyId);
  if (!storyId || !token) {
    return;
  }

  try {
    const response = await Axios.delete(
      `${API_URL}/spaces/stories`,
      { data: { id: storyId } }
      // { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response) {
      console.log("Story successfully deleted.");
    }
  } catch (e) {
    console.log(e.message);
  }
};

export const updateSpace = (spaceObject) => async (dispatch, getState) => {
  const { backgroundColor, color, description, spaceId, title } = spaceObject;
  const token = getState().user.token;

  if (!backgroundColor || !color || !description || !spaceId || !title) {
    return;
  }

  try {
    const response = await Axios.patch(
      `${API_URL}/spaces/`,
      { backgroundColor, color, description, spaceId, title },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response) {
      dispatch(saveUpdatedSpace({ ...spaceObject }));
      setTimeout(() => {
        dispatch(setUpdateFailure());
      }, 2000);
    }
  } catch (e) {
    console.log(e.message);
  }
};
