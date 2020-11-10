import Axios from "axios";
import { API_URL } from "../../config/constants";
import { appDoneLoading, appLoading } from "../appState/actions";

export const saveSpaces = (spaces) => {
  return {
    type: "SAVE_SPACES",
    payload: [...spaces],
  };
};

export const saveSpace = (space) => {
  return {
    type: "SAVE_SPACE",
    payload: { ...space },
  };
};

export const fetchSpaces = () => async (dispatch, getState) => {
  dispatch(appLoading());

  try {
    const spaces = await Axios.get(`${API_URL}/spaces`);

    dispatch(saveSpaces([...spaces.data]));

    if (spaces) {
      dispatch(appDoneLoading());
    }
  } catch (e) {
    console.log(e);
  }
};

export const fetchSpaceById = (id) => async (dispatch, getState) => {
  dispatch(appLoading());

  try {
    const space = await Axios.get(`${API_URL}/spaces/${id}`);

    dispatch(saveSpace({ ...space.data }));

    if (space) {
      dispatch(appDoneLoading());
    }
  } catch (e) {
    console.log(e);
  }
};
