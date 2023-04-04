//This is a class to shape our errors in a form we want

class ErrorHandler extends Error {
    constructor(message , statusCode){
        super(message)
        this.statusCode = statusCode ;
        Error.captureStackTrace(this, this.constructor) ;
    }
}

module.exports = ErrorHandler ;