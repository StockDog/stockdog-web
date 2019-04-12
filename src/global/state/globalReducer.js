import { GLOBAL_ACTION_TYPES } from './globalActions';

const initialState = {
  token: null,
  userId: null
};

export function globalReducer(state = initialState, action) {
  switch (action.type) {
    case GLOBAL_ACTION_TYPES.SET_USER_INFO:
      return Object.assign({}, state, {
        token: action.payload.token,
        userId: action.payload.userId
      });
    default:
      return state;
  }
}
