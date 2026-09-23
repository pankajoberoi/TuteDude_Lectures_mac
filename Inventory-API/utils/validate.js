exports.validateItemPayload = (req,res,next) => {
    const {name,price,stock,category} = req.body;

    const errors=[];

    if(req.method === "POST"){
        if(!name) errors.push("Field 'Name' is required");
        if(category === undefined || category === '') errors.push("Field 'Category' is required")
        if(price === undefined || isNaN(price) || price < 0) errors.push("Value of price should be +ve and required")
        if(stock === undefined || isNaN(stock) || stock < 0) errors.push("Value of stock should be +ve and required")
    }

    if(req.method === "PUT"){
        if(price === undefined || isNaN(price) || price < 0) errors.push("Value of price should be +ve and required")
        if(stock === undefined || isNaN(stock) || stock < 0) errors.push("Value of stock should be +ve and required")
    }

    if(errors.length > 0){
        return res.status(400).json({
            success:false,
            error:errors
        })
    }
    next()
}

//Middleware to check if item exists
exports.checkItemExists=(database)=>{
    return (req,res,next)=>{
        const item=database.find(i => i.id === parseInt(req.params.id))

        if(!item){
            return res.status(404).json({
                success:false,
                error:"Item with id " + req.params.id + " doesnt exists"
            })
        }

        req.item=item;//Attached maching item with req object

        next();


    }
}

