import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
//importar reducers 
import reducerPrincipal from './reducers'

const initialState = {};

const middleware = [thunk];


// store toma 3 parámetros
const store = createStore(reducerPrincipal, initialState, compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


export default store;