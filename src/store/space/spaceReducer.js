const initialState = {
  all: [],
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
    default:
      return state;
  }
};

export default spaceReducer;
