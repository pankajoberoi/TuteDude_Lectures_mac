exports.santizeItemPayload=(req,res,next)=>{
    if(req.body){
        if(typeof req.body.name === 'string'){
            req.body.name=req.body.name.trim();
        }
        if(typeof req.body.category === 'string'){
            req.body.category=req.body.category.trim().toLowerCase();
        }
        if(req.body.price !== undefined){
            req.body.price = parseFloat(req.body.price)
        }
        if(req.body.stock !== undefined){
            req.body.stock=parseInt(req.body.stock)
        }
    }
    next();
}


