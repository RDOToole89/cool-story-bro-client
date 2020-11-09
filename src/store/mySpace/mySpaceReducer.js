const initialState = {
  userData: {},
  newPost: {},
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
        newPost: { ...action.payload },
      };
    }

    default:
      return state;
  }
};

export default mySpaceReducer;
