/////////este es el REDUCER PRINCIPAL///////////////


import { combineReducers } from 'redux'
import citasReducer from './citasReducer'




export default combineReducers({
    //Propiedad de citas reducer --> citasReducer from citasreducer.js
    citas: citasReducer
});