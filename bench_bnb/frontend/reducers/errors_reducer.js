import { combineReducers } from "redux";
import sessionErrorsReducer from './session_errors_reducer'

const initialState = {
  session: []
}

const errorsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers ({
  session: sessionErrorsReducer
})