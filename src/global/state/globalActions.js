export const GLOBAL_ACTION_TYPES = {
   SET_AUTH_TOKEN: 'SET_AUTH_TOKEN'
};

export function setAuthToken(token) {
   return {
      type: GLOBAL_ACTION_TYPES.SET_AUTH_TOKEN,
      payload: {
         token
      }
   }
};
