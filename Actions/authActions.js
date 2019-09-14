import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';
import { returnErrors, clearErrors } from './errorActions';


export const login = (email, password) => dispatch => {
  //Login function
};

export const register = (company, name, email, password) => dispatch => {
  //Register function
};

export const logout = () => {
  //Logout
};