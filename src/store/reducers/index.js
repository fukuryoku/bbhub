import {combineReducers} from 'redux';
import currentUser from './currentUser';
import errors from './errors'
import products from './products'
import ecourses from './ecourses'
import lessons from './lessons'


const rootReducer = combineReducers({
    currentUser,
    errors,
    products,
    ecourses,
    lessons
});

export default rootReducer;