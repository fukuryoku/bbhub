import {apiCall} from '../../services/api';
import {addError} from './errors';
import { LOAD_LESSONS, REMOVE_LESSONS, UPDATE_LESSONS } from "../actionTypes";

export const loadLessons= lessons =>({
    type:LOAD_LESSONS,
    lessons
});
export const remove = id =>({
  type:REMOVE_LESSONS,
  id
});


// export const update = (products, id) =>({
//   type:UPDATE_PRODUCTS,
//   products,
//   id
// });

export const postNewLesson= (ecourse_id, title, order, text, video, img, question, options, answer) =>(dispatch, getState)=>{
  let {currentUser} = getState()
  const id = currentUser.user.id
  return apiCall('post', `/api/users/${id}/ecourses/${ecourse_id}/lessons/`, 
  { title:title, order:order, text:text, video:video, img:img, question:question, options:options, answer:answer})
  .then(res=>{})
  .catch((err)=>dispatch(addError(err.message)))
}




export const fetchLessons = (ecourse_id) => {
  return dispatch => {
    return apiCall("get", `/api/ecourses/${ecourse_id}/lessons`)
      .then(res => {
        dispatch(loadLessons(res));
      })
      .catch((err)=>dispatch(addError(err.message)))
    };
};


export const updateLesson = (user_id, ecourse_id, lesson_id, title, order, text, video, img, question, options, answer) =>(dispatch)=>{
  // let {currentUser} = getState()
  // const id = currentUser.user.id
  return apiCall('put', `/api/users/${user_id}/ecourses/${ecourse_id}/lessons/${lesson_id}`,
    { title:title, order:order, text:text, video:video, img:img, question:question, options:options, answer:answer})

  .then(res=>{})
  .catch((err)=>dispatch(addError(err.message)))
}


export const removeLesson = (user_id, ecourse_id, lesson_id)=>{
  return dispatch =>{
    return apiCall('delete', `/api/users/${user_id}/ecourses/${ecourse_id}/lessons/${lesson_id}`)
    .then(()=>dispatch(remove(lesson_id)))
    .catch((err)=>dispatch(addError(err.message)))
  }
}
