import { apiCall } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

// export const updateProgress = (lessonID, userID) =>(dispatch)=>{
//   return apiCall('put', `/api/profile/${userID}/progress`, { progress:lessonID})
//   .then(res=>{})
//   .catch((err)=>dispatch(addError(err.message)))
// }

export const updateProgress = (lessonID, userID)=>{
  return dispatch =>{
    return apiCall('put', `/api/profile/${userID}/progress`, { progress:lessonID})
    .then(res=>{})
    .catch((err)=>dispatch(addError(err.message)))
  }
}

