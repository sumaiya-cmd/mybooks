import { ADD_TO_CART ,REMOVE_FROM_CART ,UPDATE_CART_QUANTITY } from "../ActionsTypes";

export const addbook = (data) => (dispatch , getstate) =>{
    try {
        
        let newdata =[...getstate().product.productDetails, data]
        localStorage.setItem('books' , JSON.stringify(newdata))

        dispatch({
            type:ADD_TO_CART ,
            payload:newdata
        })

    } 
    catch (error) {

        console.log(error) ;
    }

}

export const deletebook =(id)=> (dispatch , getstate) =>{
    try {
        
        let b = getstate().product.productDetails.filter((e )=>{
            return e.id !== id
        })
        localStorage.setItem('books', JSON.stringify(b));

        dispatch({
            type:REMOVE_FROM_CART,
            payload : b
        })

    } catch (error) {
        console.log(error)
    }
}