import { LOAD_LESSONS, REMOVE_LESSONS, UPDATE_LESSONS } from "../actionTypes";

 const lessons = (state=[], action)=>{
    switch(action.type){
        case LOAD_LESSONS:
            return [...action.lessons];
        case REMOVE_LESSONS:
            return state.filter(lesson=>lesson._id !== action.id);
        case UPDATE_LESSONS:
            return [...action.lessons]
    default:
        return state
    }
}

export default lessons