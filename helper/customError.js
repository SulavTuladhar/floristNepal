module.exports = function customError(errorMsg, status){
    const error = new Error(errorMsg);
    error.status = status;
    return error;
}