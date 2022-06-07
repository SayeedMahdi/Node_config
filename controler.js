module.exports = (req,res, next)=>{
    const {user} = req.query;
    if(user === "mahdi"){
        next()
    }else{
        res.status(401).send("un Authorize");
    }
}