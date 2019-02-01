import { LOAD_PRODUCTS, REMOVE_PRODUCTS, UPDATE_PRODUCTS } from "../actionTypes";

 const products = (state=[], action)=>{
    switch(action.type){
        case LOAD_PRODUCTS:
            return [...action.products];
        case REMOVE_PRODUCTS:
            return state.filter(product=>product._id !== action.id);
        case UPDATE_PRODUCTS:
            return [...action.products]
    default:
        return state
    }
}

export default products