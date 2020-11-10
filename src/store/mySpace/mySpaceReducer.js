const initialState = {
  userData: {},
  newPost: {},
  postSuccess: false,
  updatedSpace: {},
  updateSuccess: false,
};

const mySpaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER_SPACE": {
      return {
        ...state,
        userData: { ...action.payload },
      };
    }
    case "SAVE_NEW_POST": {
      return {
        ...state,
        newPost: { ...state.newPost, ...action.payload },
        postSuccess: true,
      };
    }
    case "SET_POST_SUCCESS": {
      return {
        ...state,
        postSuccess: true,
      };
    }
    case "SET_POST_FAILURE": {
      return {
        ...state,
        postSuccess: false,
      };
    }
    case "SAVE_UPDATED_SPACE": {
      return {
        ...state,
        updatedSpace: { ...state.updatedSpace, ...action.payload },
        updateSuccess: true,
      };
    }
    case "SET_UPDATE_SUCCESS": {
      return {
        ...state,
        updateSuccess: true,
      };
    }
    case "SET_UPDATE_FAILURE": {
      return {
        ...state,
        updateSuccess: false,
      };
    }

    default:
      return state;
  }
};

export default mySpaceReducer;
