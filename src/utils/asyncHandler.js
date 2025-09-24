const asyncHandler = (requestHandler) => {
return  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next);
  };
};

export { asyncHandler };

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler= (fn) => async (req , res , next) => {

//     try {

//     } catch (error) {
//         res.status(error.code || 500)
//     }

// }
