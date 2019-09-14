import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../Actions/types';

const initialState = {
  userId: localStorage.getItem('userID'),
};
export default function(state = initialState, action) {
  switch (action.type) {
    
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('userID', action.payload);
      return {
        ...state,
        userId: action.payload
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('userID');
      return {
        ...state,
        userId: null,
      };
    default:
      return state;
  }
}