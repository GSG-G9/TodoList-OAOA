const boomify = (status, message) => {
    const error = new Error();
    error.msg = message;
    error.status = status;
  
    return error;
  };
  
  module.exports = { boomify };