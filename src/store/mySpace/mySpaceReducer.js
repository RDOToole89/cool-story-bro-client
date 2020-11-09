const initialState = {
  userData: {},
};

const mySpaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER_SPACE": {
      return {
        ...state,
        userData: { ...action.payload },
      };
    }

    default:
      return state;
  }
};

export default mySpaceReducer;
