import { createStore  , combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import CartReducer from "./Reducers/CartReducer.js";

const Reducers = combineReducers({
    product:CartReducer
});

const middleware = [thunk] ;
const store = createStore(
    Reducers ,
    composeWithDevTools(applyMiddleware(...middleware))
    )

export default store ;     
