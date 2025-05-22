import {Type} from './action.type'

export const initialState = {
    basket:[]
}
export const Reducer =  (state,action)=> {
   switch (action.type) {
    case Type.ADD_TO_CART:
        return {
            ...state,
            basket : [...state.basket, action.item]
        }
    default:
        return state;
   }
}