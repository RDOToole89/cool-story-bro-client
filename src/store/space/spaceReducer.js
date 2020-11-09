const initialState = {
  all: [],
  singleSpace: {},
};

const spaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_SPACES": {
      // console.log("WHAT IS ACTION.payload?", action.payload);
      return {
        ...state,
        all: [...action.payload],
      };
    }
    case "SAVE_SPACE": {
      return {
        ...state,
        singleSpace: { ...action.payload },
      };
    }
    default:
      return state;
  }
};

export default spaceReducer;
