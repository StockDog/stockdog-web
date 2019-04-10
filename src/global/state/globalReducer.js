import { GLOBAL_ACTION_TYPES } from './globalActions';

const initialState = {
  token: null
};

export function globalReducer(state = initialState, action) {
  switch (action.type) {
    case GLOBAL_ACTION_TYPES.SET_AUTH_TOKEN:
      return Object.assign({}, state, {
        token: action.payload.token
      });
    default:
      return state;
  }
}
