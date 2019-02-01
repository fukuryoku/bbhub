import {apiCall} from '../../services/api';
import {addError} from './errors';
import {LOAD_ECOURSES, REMOVE_ECOURSES, UPDATE_ECOURSES} from '../actionTypes'

export const loadEcourses= ecourses =>({
    type:LOAD_ECOURSES,
    ecourses
});
export const remove = id =>({
  type:REMOVE_ECOURSES,
  id
});


// export const update = (products, id) =>({
//   type:UPDATE_PRODUCTS,
//   products,
//   id
// });



export const postNewEcourse= (title, langfrom, langto, text, level, img) =>(dispatch, getState)=>{
    let {currentUser} = getState()
    const id = currentUser.user.id
    return apiCall('post', `/api/users/${id}/ecourses`, { title:title, langfrom:langfrom, langto:langto, text:text, level:level, img:img })
    .then(res=>{})
    .catch((err)=>dispatch(addError(err.message)))
}



export const fetchEcourses = () => {
  return dispatch => {
    return apiCall("get", "/api/ecourses")
      .then(res => {
        dispatch(loadEcourses(res));
      })
      .catch((err)=>dispatch(addError(err.message)))
    };
};



export const updateEcourse = (user_id, ecourse_id, title, langfrom, langto, text, level, img) =>(dispatch)=>{
  // let {currentUser} = getState()
  // const id = currentUser.user.id
  return apiCall('put', `/api/users/${user_id}/ecourses/${ecourse_id}`, { title:title, langfrom:langfrom, langto:langto, text:text, level:level, img:img })
  .then(res=>{})
  .catch((err)=>dispatch(addError(err.message)))
}


export const removeEcourse = (user_id, ecourse_id)=>{
  return dispatch =>{
    return apiCall('delete', `/api/users/${user_id}/ecourses/${ecourse_id}`)
    .then(()=>dispatch(remove(ecourse_id)))
    .catch((err)=>dispatch(addError(err.message)))
  }
}
