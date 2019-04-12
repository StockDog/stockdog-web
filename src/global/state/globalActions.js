export const GLOBAL_ACTION_TYPES = {
  SET_USER_INFO: 'SET_USER_INFO'
};

export function setUserInfo(userId, token) {
  return {
    type: GLOBAL_ACTION_TYPES.SET_USER_INFO,
    payload: {
      userId,
      token
    }
  }
};