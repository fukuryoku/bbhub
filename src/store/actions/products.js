import {apiCall} from '../../services/api';
import {addError} from './errors';
import {LOAD_PRODUCTS, REMOVE_PRODUCTS, UPDATE_PRODUCTS} from '../actionTypes'

export const loadProducts = products =>({
    type:LOAD_PRODUCTS,
    products
});
export const remove = id =>({
  type:REMOVE_PRODUCTS,
  id
});
// export const update = (products, id) =>({
//   type:UPDATE_PRODUCTS,
//   products,
//   id
// });
export const updateProduct = (user_id, product_id, title, text, price, img) =>(dispatch)=>{
  // let {currentUser} = getState()
  // const id = currentUser.user.id
  return apiCall('put', `/api/users/${user_id}/products/${product_id}`, { title:title, text:text, price:price, img:img })
  .then(res=>{})
  .catch((err)=>dispatch(addError(err.message)))
}


export const removeProduct = (user_id, product_id)=>{
  return dispatch =>{
    return apiCall('delete', `/api/users/${user_id}/products/${product_id}`)
    .then(()=>dispatch(remove(product_id)))
    .catch((err)=>dispatch(addError(err.message)))
  }
}


export const fetchProducts = () => {
    return dispatch => {
      return apiCall("get", "/api/products")
        .then(res => {
          dispatch(loadProducts(res));
        })
        .catch((err)=>dispatch(addError(err.message)))
      };
  };
  

export const postNewProduct = (title, text, price, img) =>(dispatch, getState)=>{
    let {currentUser} = getState()
    const id = currentUser.user.id
    return apiCall('post', `/api/users/${id}/products`, { title:title, text:text, price:price, img:img })
    .then(res=>{})
    .catch((err)=>dispatch(addError(err.message)))
}
