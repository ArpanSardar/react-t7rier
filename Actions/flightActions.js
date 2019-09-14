import {GET_FLIGHT_DETAILS} from './types'
import axios from 'axios';
import store from '../store';
import { returnErrors, clearErrors } from './errorActions';

export const getFlightDetails = (searchObject) => dispatch => {
    //server call
    axios.get('http://localhost:5000/api/flightSearAPI',{
    params: {
      sourceCity: searchObject.sourceCity,
      destinationCity: searchObject.destination,
      travelDate: searchObject.travelDate,
      returnDate: searchObject.returnDate
    }
  })
  .then(response=>{
    console.log(response);
     dispatch(clearErrors());
    dispatch({
        type: GET_FLIGHT_DETAILS,
        payload: JSON.parse(response.data)
    });
  })
  .catch(error=>{
    console.log(error);
    dispatch(returnErrors(error.message));
  })
};