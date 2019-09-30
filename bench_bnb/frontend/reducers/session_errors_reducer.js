import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const initialState = {
  id: null
}

export default (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { id: action.id });
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
};