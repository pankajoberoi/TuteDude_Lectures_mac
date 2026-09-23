const API_Keys={
    'master-secret-key': {id:'u1',role:'admin',name:'Admin User'},
    'emp-secret-key': {id:'u1',role:'staff',name:'Staff User'}
}

//Middleware : Authenticate apki req

exports.authenticate = (req,res,next) =>{
    const apikey=req.headers['x-api-key']

    if(!apikey || !API_Keys[apikey]){
        return res.status(401).json({
            success:false,
            error:"Either Api key is not Present or its not a valid one"
        })
    }
    else{
        req.user=API_Keys[apikey]
        next();
    }
}



exports.authorize = (...allowedRoles) =>{
    return (req,res,next)=>{
        if(!req.user || !allowedRoles.includes(req.user.role)){
            return res.status(403).json({
                success:false,
                error:'Access forbidden for your role'
            })
        }
        else{
            next()
        }
    }
}
