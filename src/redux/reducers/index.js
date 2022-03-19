// this file is using to combine reducers..

import {combineReducers} from 'redux';
import counterReducer from './counterReducer'

const reducers = combineReducers({
    counterReducer // counterReducer: counterReducer
})

export default reducers;