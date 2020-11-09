const initialState = {
  userSpace: {},
};

const mySpaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER_SPACE": {
      return {
        ...state,
        userSpace: { ...action.payload },
      };
    }

    default:
      return state;
  }
};

export default mySpaceReducer;
