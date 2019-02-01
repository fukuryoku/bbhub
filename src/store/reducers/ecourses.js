import { LOAD_ECOURSES, REMOVE_ECOURSES, UPDATE_ECOURSES } from "../actionTypes";

 const ecourses = (state=[], action)=>{
    switch(action.type){
        case LOAD_ECOURSES:
            return [...action.ecourses];
        case REMOVE_ECOURSES:
            return state.filter(ecourse=>ecourse._id !== action.id);
        case UPDATE_ECOURSES:
            return [...action.ecourses]
    default:
        return state
    }
}

export default ecourses