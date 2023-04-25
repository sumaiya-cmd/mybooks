import { ADD_TO_CART ,REMOVE_FROM_CART ,UPDATE_CART_QUANTITY  } from "../ActionsTypes";

const initstate ={
    loading:false ,
    error:null ,
    productDetails:[]
}

const CartReducer =(state=initstate ,{type,payload})=>{
    switch(type){
        case ADD_TO_CART :
            return{
                ...state ,
                productDetails:payload
            }
        
        case REMOVE_FROM_CART :
            return {
                ...state ,
                productDetails:payload
            }

        case UPDATE_CART_QUANTITY :
            return {
                ...state ,
                productDetails:payload
            }  
        default :
            return state      
    }
}

export default CartReducer;