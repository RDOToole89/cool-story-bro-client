const initialState = {
  userData: {},
  newPost: {},
  postSuccess: false,
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
      console.log("WHAT IS IN SAVE_NEW_POST PAYLOAD?", action.payload);
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

    default:
      return state;
  }
};

export default mySpaceReducer;
