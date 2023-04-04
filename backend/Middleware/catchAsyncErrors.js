// It is a error catching function that we use in promise to resolve it .then and .catch

module.exports = (Errorfunction ) =>(req,res,next) =>{
    Promise.resolve(Errorfunction(req,res,next)).catch(next); 
}