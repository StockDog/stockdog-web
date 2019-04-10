import { GLOBAL_ACTION_TYPES } from './globalActions';

const initialState = {
  token: null,
  userId: null
};

export function globalReducer(state = initialState, action) {
  switch (action.type) {
    case GLOBAL_ACTION_TYPES.SET_AUTH_TOKEN:
      return Object.assign({}, state, {
        token: action.payload.token
      });
    case GLOBAL_ACTION_TYPES.SET_USER_ID:
      return Object.assign({}, state, {
        userId: action.payload.id
      });
    default:
      return state;
  }
}
