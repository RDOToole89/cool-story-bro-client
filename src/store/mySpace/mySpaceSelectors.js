export const selectUserInfo = (reduxState) => {
  return reduxState.mySpace.userData;
};

export const selectUserSpace = (reduxState) => {
  return reduxState.mySpace.userData.space;
};

export const selectUserStories = (reduxState) => {
  const stories = reduxState.mySpace.userData.space?.stories;

  if (!stories) {
    return [];
  } else {
    return stories;
  }
};

export const postSuccess = (reduxState) => {
  return reduxState.mySpace.postSuccess;
};
