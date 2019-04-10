export const GLOBAL_ACTION_TYPES = {
  SET_AUTH_TOKEN: 'SET_AUTH_TOKEN',
  SET_USER_ID: 'SET_USER_ID'
};

export function setAuthToken(token) {
  return {
    type: GLOBAL_ACTION_TYPES.SET_AUTH_TOKEN,
    payload: {
      token
    }
  }
};

export function setUserId(id) {
  return {
    type:GLOBAL_ACTION_TYPES.SET_USER_ID,
    payload: {
      id
    }
  }
};
