import counterReducer from './counter'
import loggedReducer from './islogged'
import { combineReducers }  from 'redux';


//bundle all the reducers at 1 place
const allReducers = combineReducers({
    counter : counterReducer,
    isLogger : loggedReducer
})

export default allReducers;