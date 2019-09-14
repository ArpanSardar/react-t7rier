import {GET_COMPANY_DETAILS} from '../Actions/types';

const initialState = {
  flights: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COMPANY_DETAILS:
      return {
        ...state,
        flights: action.payload
      };
    default:
      return state;
  }
}