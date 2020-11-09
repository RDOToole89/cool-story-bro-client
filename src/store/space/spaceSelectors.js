export const allSpaces = (reduxState) => {
  return reduxState.spaces.all;
};

export const singleSpace = (reduxState) => {
  return reduxState.spaces.singleSpace;
};

export const selectStories = (reduxState) => {
  return reduxState.spaces.singleSpace.stories;
};
