exports.successResponse=(res,statusCode,message,data=null)=>{
    return res.status(statusCode).json({
        success:true,
        message,
        data
    })
}

exports.errorResponse=(res,statusCode,message,error=null)=>{
    return res.status(statusCode).json({
        success:false,
        message,
        error
    })
}

