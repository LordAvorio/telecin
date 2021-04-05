import {combineReducers} from 'redux'

import movieReducer from './MovieReducer'

const allReducer = combineReducers({
    movieReducer
})

export default allReducer