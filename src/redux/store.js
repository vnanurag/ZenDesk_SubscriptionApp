import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

export const initialState = {
    plan: 'basic',
    name: 'Basic',
    seats: 0,
    cost:  0
};

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk));
}

export default configureStore;